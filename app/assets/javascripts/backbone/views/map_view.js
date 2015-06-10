var MapView = Backbone.View.extend({
	template: JST['backbone/templates/map'],
	el: "#map",
	model: Map,

	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		this.mapCanvasSquare();
		map = new google.maps.Map(document.getElementById("map-canvas"), myApp.mapOptions);
	},


	addWalkGeoJSON: function(walk, geometry, color){
		
		var newGeoJSON = {
			"type": 'FeatureCollection',
			"features": [{
				"type": "Feature",
				"geometry": {
					"type": geometry,
					"coordinates": [walk],
					},
				"properties": {
					"zIndex": 9999,
					"fillColor": color || "#ff292c",
					"strokeColor": color || "#ff292c",
					"strokeWeight": 8,
					"fillOpacity": 0.5
				}
			}]
		};

		var geoJSON = {
"type": "FeatureCollection", 
"features": [
	{"type": "Feature",
	"geometry": {
		"type": "polygon",
		 "coordinates": [[[-87.63747, 41.88983], [-87.63912, 41.89065], [-87.64046, 41.89233], [-87.63709, 41.89237], [-87.63703, 41.89153], [-87.63556, 41.89153], [-87.63553, 41.88997], [-87.63747, 41.88983], [-87.63747, 41.88983], [-87.63245, 41.89], [-87.63245, 41.88572], [-87.63686, 41.88572], [-87.63661, 41.88613], [-87.63532, 41.88687], [-87.63681, 41.88843], [-87.63698, 41.8891], [-87.63747, 41.88983], [-87.63747, 41.88983], [-87.63854, 41.88989], [-87.63805, 41.88908], [-87.6401, 41.88908], [-87.64169, 41.89105], [-87.64148, 41.89138], [-87.63253, 41.89159], [-87.63253, 41.89001], [-87.63747, 41.88983], [-87.63747, 41.88983]]]
		},
	"properties": {
		"zIndex": 9999,
		"fillColor": "#ff292c",
		"strokeColor": "#ff292c",
		"strokeWeight": 8,
		"fillOpacity": 0.5
		}
	}]};

		//close loop
		geoJSON.features[0].geometry.coordinates[0].push(geoJSON.features[0].geometry.coordinates[0][0]);

		console.log(newGeoJSON.features[0].geometry.coordinates);
		console.log(geoJSON.features[0].geometry.coordinates);

		debugger;
		map.data.addGeoJson(geoJSON);
		// this.extendBounds(geoJSON, "Polygon");
	},

	extendBounds: function (geoJson, geotype) {
  	var bounds, coordinates;
  	bounds = new google.maps.LatLngBounds();

  	switch (geotype) {
    case "Polygon":
      coordinates = geoJson.geometry.coordinates[0];
      coordinates.forEach( function(coordinate) {
        bounds.extend(new google.maps.LatLng(coordinate[1], coordinate[0]));
        });
    break;
    case "Point":
      markers = geoJson.features;
      markers.forEach( function(point) {
        bounds.extend(new google.maps.LatLng(point.geometry.coordinates[1], point.geometry.coordinates[0]));
        });
    break;
  }

  map.fitBounds(bounds);
  map.panToBounds(bounds);
},

	mapCanvasSquare: function() {
		console.log('setting square map layout');
		var $width = document.documentElement.clientWidth;
		var $height = $('.top-bar').height();
		$('#map-canvas').css({
		"height": $width,
		// "position": "fixed",
		// "top": $height,
		"background-color": "grey"
		});
	},



	setMapHeight: function(){
		//might want to extract map height function to this view
	},

	otherMapViewFunctions: function(){
		//this is made up. things for loading various geojsons and such?
	},

	loadGeoJSON: function(){},
});


