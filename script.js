// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the URL of the XML file to load
xhr.open("GET", "restaurant-data.xml", true);

// Set the callback function for when the request completes
xhr.onreadystatechange = function () {
  // Check if the request is complete and was successful
  if (this.readyState === 4 && this.status === 200) {
    // Get the XML data from the response
    var xmlDoc = xhr.responseXML;

    // Get all the restaurant elements from the XML data
    var restaurants = xmlDoc.getElementsByTagName("restaurant");

    // Loop through each restaurant and add it to the webpage
    for (var i = 0; i < restaurants.length; i++) {
      var restaurant = restaurants[i];

      // Get the name, address, and type of the restaurant
      var name = restaurant.getAttribute("name");
      var address = restaurant.getAttribute("address");
      var type = restaurant.getAttribute("type");

      // Create a new list item for the restaurant
      var li = document.createElement("li");

      // Set the text content of the list item to the name and address of the restaurant
      li.textContent = name + " - " + address;

      // Change the color of the text depending on the type of the restaurant
      if (type === "sitdown") {
        li.style.color = "green";
      } else if (type === "bar") {
        li.style.color = "blue";
      }

      // Add the list item to the restaurant list
      document.getElementById("restaurant-list").appendChild(li);
    }
  }
};

// Send the AJAX request to load the XML file
xhr.send();
