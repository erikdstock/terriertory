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
		map.setCenter(this.model.get('centroid'))
	},


	addWalkGeoJson: function(walk, geometry, color){
		//only include walks with at least one mark
		if (walk.length > 0){ 
			var geoJSON = {
				type: "Feature",
				geometry: {
					type: geometry,
					coordinates: [walk]
				}
			};


			//close loop if geometry is polygon
			if (geometry == 'polygon'){
				geoJSON.geometry.coordinates[0].push(geoJSON.geometry.coordinates[0][0]);
			}

			map.data.addGeoJson(geoJSON);

			// extendBounds is not working right now.
			// this.extendBounds(geoJSON, geometry);
		}
	},

	addUsersWalks: function(walksCollection){
		var that = this
		walksCollection.forEach(function(walk){
			that.addWalkGeoJson(walk, "polygon")
		})
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


