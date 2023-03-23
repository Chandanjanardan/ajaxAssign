
const xhttp = new XMLHttpRequest();


xhttp.open("GET", "restaurant-data.xml", true);


xhttp.responseType = "document";


xhttp.send();


xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const xmlDoc = this.responseXML;
    const restaurants = xmlDoc.getElementsByTagName("restaurant");

    let html = "";
    for (let i = 0; i < restaurants.length; i++) {
      const name = restaurants[i].getAttribute("name");
      const address = restaurants[i].getAttribute("address");
      const cuisine = restaurants[i].getAttribute("type");
      const lat = restaurants[i].getAttribute("lat");
      const lng = restaurants[i].getAttribute("lng");

      html += "<h2>" + name + "</h2>";
      html += "<p>" + address + "</p>";
      html += "<p>" + cuisine + "</p>";
      html += "<p>Lat: " + lat + "</p>";
      html += "<p>Lng: " + lng + "</p>";
    }

const xhttp = new XMLHttpRequest();


xhttp.open("GET", "restaurant-data.xml", true);


xhttp.responseType = "document";

// Send the request
xhttp.send();


xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const xmlDoc = this.responseXML;
    const restaurants = xmlDoc.getElementsByTagName("restaurant");

    const ul = document.getElementById("restaurant-data");
    for (let i = 0; i < restaurants.length; i++) {
      const name = restaurants[i].getAttribute("name");
      const address = restaurants[i].getAttribute("address");
      const type = restaurants[i].getAttribute("type");

      const li = document.createElement("li");
      li.innerHTML = name + " - " + address;

      if (type === "sitdown") {
        li.classList.add("sitdown");
      } else if (type === "bar") {
        li.classList.add("bar");
      }

      ul.appendChild(li);
    }
  }
}

    document.getElementById("restaurant-data").innerHTML = html;
  }
}
