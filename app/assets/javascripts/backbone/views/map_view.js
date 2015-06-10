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


	currentUserGeoJSON: function(){
		this.geoJSON = {
			"type": 'Feature',
			"geometry": {
				"type": "Polygon",
				"coordinates": [this.model.get("walks")["currentUser"][0]],
			},
			// "properties": {
				// "geometry": "Polygon",
				// "zIndex": 9999,
				// "fillColor": "#ff292c",
				// "strokeColor": "#ff292c",
				// "strokeWeight": 8,
				// "fillOpacity": 0.5
			// }
		};
		debugger;
		this.geoJSON.geometry.coordinates[0].push(this.geoJSON.geometry.coordinates[0][0]);

		map.data.addGeoJson(this.geoJSON);
		this.extendBounds(this.geoJSON, "Polygon");
		// this.geoJSON.options = myApp.mapOptions;
	},

	extendBounds: function (geojson_data, geotype) {
  	var bounds, coordinates;
  	bounds = new google.maps.LatLngBounds();

  	switch (geotype) {
    case "Polygon":
      coordinates = geojson_data.geometry.coordinates[0];
      coordinates.forEach( function(coordinate) {
        bounds.extend(new google.maps.LatLng(coordinate[1], coordinate[0]));
        });
    break;
    case "Point":
      markers = geojson_data.features;
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


