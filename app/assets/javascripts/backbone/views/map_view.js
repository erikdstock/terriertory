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
		debugger;
		
		var geoJSON = {
			type: "Feature",
			geometry: {
				type: geometry,
				coordinates: [walk]
			}
		};

		var geoJSON2 = {
				type: "Feature",
				geometry: {
					type: geometry,
					coordinates: [[
						[-87.63747, 41.88983], 
						[-87.63912, 41.89065], 
						[-87.64046, 41.89233], 
						[-87.63709, 41.89237], 
						[-87.63703, 41.89153],
						[-87.63253, 41.89001],
						[-87.63747, 41.88983], 
						[-87.63747, 41.88983]
						]]
					}
			};

		//close loop
		if (geometry == 'polygon'){
			geoJSON.geometry.coordinates[0].push(geoJSON.geometry.coordinates[0][0]);
		}

		// console.log(newGeoJSON.geometry.coordinates);
		console.log(geoJSON.geometry.coordinates);

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


