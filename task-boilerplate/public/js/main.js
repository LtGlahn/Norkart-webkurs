// Popup 
function onEachFeature(feature, layer) {
    // does this feature have a property named  name?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
}


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

function finnrullestolstyling( feature) {
	stil = {
		radius: 4,
		fillColor: "#FF0000",
		color: "#000000",
		weight: 1,
		opacity: 1,
		fillOpacity: 0.6
	}
	
 	if ( feature.properties.wheelchair && feature.properties.wheelchair == "yes" ) {
		stil.fillColor = "#00FF00";
		stil.radius = 7; 
	}
	
	return stil;
}


//Initializing the map
function setMap() {

      console.log('Loading map');

      var map = L.map('map').setView([58.969976, 5.733107], 14);
      //Set view takes two parameters;
            //1. The coordinates for the center of the map
            //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out


      //Adding the base map. Base map decides how the background map looks like
      var basemapUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      L.tileLayer(basemapUrl).addTo(map);

      //Adding geoJSON layer to the map:
      L.geoJSON(restaurants, {
		  onEachFeature : onEachFeature, 
		  pointToLayer: function (feature, latlng) {
				rullestolstyling = finnrullestolstyling(feature );
				return L.circleMarker(latlng, rullestolstyling);
			}

	  } ).addTo(map);
	  

}




window.onload = setMap;
