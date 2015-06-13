var MapView = Backbone.View.extend({
	template: JST['backbone/templates/map'],
	el: "#map",
	model: Map,

	initialize: function(){
    this.mapBounds = new google.maps.LatLngBounds();
	},

	render: function(){
		this.$el.html(this.template());
		this.mapCanvasSquare();
		map = new google.maps.Map(document.getElementById("map-canvas"), myApp.mapOptions);
		map.setCenter(this.model.get('centroid'))
	},

  renderGeoJson: function(collection, geotype, color){
    var geotype = geotype || "Polygon", color = color || "#ff292c", geoJson;

    geoJson = this.buildCollectionGeoJson(collection, geotype);
    // console.log(geoJson.features.length);
    if (geoJson) {
      map.data.addGeoJson(geoJson);
      this.extendBounds(geoJson, geotype);
      //  set style
    }

  },

	extendBounds: function (geoJson, geotype) {
  	var coordinates, bounds = this.mapBounds;

  	switch (geotype) {

      case "Polygon":
        geoJson.features.forEach(function(feature) {
          coordinates = feature.geometry.coordinates[0];
          coordinates.forEach( function(coordinate) {
            bounds.extend(new google.maps.LatLng(coordinate[1], coordinate[0]));
            });
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

	buildCollectionGeoJson: function(walksCollection, geotype){
		var that = this;

    var featureCollection = {
      type: "FeatureCollection",
      features: []
    };

    walksCollection.forEach(function(walk){
      featureCollection.features.push(that.buildWalkGeoJson(walk, geotype))
    });

    if (featureCollection.features[0]) {
      return featureCollection;
    } else {
      return false;
    }
	},

	buildWalkGeoJson: function(walk, geotype){
		//only include walks with at least three marks
		if (walk.length > 2){
			var walkFeature = {
				type: "Feature",
				geometry: {
					type: geotype,
					coordinates: [walk]
				}
			};
			//close loop if geometry is polygon
			if (geotype == 'Polygon'){
				walkFeature.geometry.coordinates[0].push(walkFeature.geometry.coordinates[0][0]);
			}

      return walkFeature
		}
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


