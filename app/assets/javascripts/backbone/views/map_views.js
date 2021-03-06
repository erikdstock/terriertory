// defining inherited views in line bc load order is messing causing LiveWalkView to be undefined when inheriting from map view

var MapView, LiveWalkView;

MapView = Backbone.View.extend({

	template: JST['backbone/templates/map'],
	el: "#map",
	model: Map,
  userColor: "#ff292c",
  colors: ["#FFFF00", "#9900FF", "#CC6600", "#009933", "#FF00FF", "#669999", "#CC3300", "#FF33CC", "#00CC99", "#333399", "#660066", "#993333", "#996633", "#333300", "#33CCFF"],

	initialize: function(){
    this.mapBounds = new google.maps.LatLngBounds();
	},

  includeNeighbors: false,

  toggleNeighbors: function(){
    var that = this;
    this.$el.find('#pack-button').toggleClass('info').toggleClass('primary');
    this.includeNeighbors = !this.includeNeighbors;
    console.log(this.includeNeighbors);
    console.log(this.geotype);
    if (this.includeNeighbors){
      this.clearMap();
      this.renderGeoJson({
        walksCollection: this.model.get('walks').currentUser,
        geotype: this.geotype,
        color: this.userColor,
        zIndex: 9999,
        strokeWeight: 4
      });
      this.model.get('walks').neighbors.forEach(function(neighbor, index){
        that.renderGeoJson({
          walksCollection: neighbor,
          geotype: that.geotype,
          color: that.colors[index],
          strokeWeight: 4,
          zIndex: (500 - index)
        });
      });
    } else{
       this.clearMap();
       this.renderGeoJson({
        walksCollection: this.model.get('walks').currentUser,
        geotype: this.geotype,
        color: this.userColor,
        zIndex: 9999,
        strokeWeight: 4
      });
    }
    //re-render geojson
  },

  geotype: "Polygon",

  setGeotype: function(geotype){
    this.geotype = geotype;
    // render geojson
  },

	render: function(){
		this.$el.html(this.template());
		this.mapCanvasSquare();
		map = new google.maps.Map(document.getElementById("map-canvas"), myApp.mapOptions);
		map.setCenter(this.model.get('centroid'));
    this.addMapListeners(map);
	},

  // !!! Need to refine this or write new setstyle functions
  addMapListeners: function(map){
    map.data.addListener('addfeature', function (event) {
      switch (event.feature.getProperty('geometry')) {

        case "MultiPoint":
        map.data.overrideStyle(event.feature, {
          // map.data.setStyle({
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 6,
              strokeColor: event.feature.getProperty('strokeColor'),
              strokeWeight: 4
            }
          // });
        });

        case "Point":
          map.data.setStyle({
            icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6,
            strokeColor: event.feature.getProperty('strokeColor'),
            strokeWeight: 4
            }
          });


        case "Polygon":
        // console.log('polygon switch');
          map.data.overrideStyle(event.feature, {
            zIndex: event.feature.getProperty('zIndex'),
            fillColor: event.feature.getProperty('fillColor'),
            strokeColor: event.feature.getProperty('strokeColor'),
            strokeWeight: event.feature.getProperty('strokeWeight'),
            fillOpacity: event.feature.getProperty('fillOpacity')
          });

        case "LineString":
          map.data.overrideStyle(event.feature, {
            strokeColor: event.feature.getProperty('strokeColor'),
            strokeWeight: event.feature.getProperty('strokeWeight'),
          });

      }
    });
  },

	// options: {walksCollection || walk, geotype, color/style properties}
  renderGeoJson: function(options){
    var geotype = options.geotype,
    		color = options.color,
        zIndex = options.zIndex,
        strokeWeight = options.strokeWeight,
    		geoJson, collection, walk;

    // Route to geoJson constructor depending on type of data received
    if (collection = options.walksCollection) {
    	geoJson = this.buildCollectionGeoJson(collection, geotype, color, zIndex, strokeWeight);
    }
    if (geoJson) {
      this.clearMap;
      map.data.addGeoJson(geoJson);
      this.extendBounds(geoJson, geotype);
      //  set style ???
    }
  },

	extendBounds: function (geoJson, geotype) {
    console.log('extending bounds')
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

	buildCollectionGeoJson: function(walksCollection, geotype, color, zIndex, strokeWeight){
		var that = this;
    var featureCollection = {
      type: "FeatureCollection",
      features: []
    };
    // console.log(walksCollection);
    walksCollection.forEach(function(walk){
    	var walkFeatureGeoJson;
    	if (walkFeatureGeoJson = that.buildWalkGeoJson(walk, geotype, color, zIndex, strokeWeight)){
    		// console.log(walkFeatureGeoJson);
    		featureCollection.features.push(walkFeatureGeoJson);
    	};
	  });

	    // console.log(featureCollection);
    if (featureCollection.features[0]) {
    	// console.log(featureCollection);
      return featureCollection;
    } else {
      return false;
    }
	},

	buildWalkGeoJson: function(walk, geotype, color, zIndex, strokeWeight){
		//only include walks with at least three marks
		if (walk.length > 2){
      // switch (geotype){
        // case "Polygon": {

        // }
          var walkFeature = {
            type: "Feature",
            geometry: {
              type: geotype,
              coordinates: walk
          },
          properties: {
            geometry: geotype,
            zIndex: zIndex,
            fillColor: color,
            strokeColor: color,
            strokeWeight: strokeWeight,
            fillOpacity: 0.5
          }
  			}
      // }
			//close loop if geometry is polygon
			if (geotype == 'Polygon'){
        walkFeature.geometry.coordinates = [walkFeature.geometry.coordinates];
				walkFeature.geometry.coordinates[0].push(walkFeature.geometry.coordinates[0][0]);
			}
      // if (geotype == '')

      return walkFeature;
		} else {
			return false;
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

  clearMap: function(){
    map.data.forEach(function(feature) {
      map.data.remove(feature);
    });
  },

  renderGeoType: function(event, geotype){
    var that = this;
    this.$el.find('.geotype-button').removeClass('success').addClass('secondary')
    $(event.target).addClass('success')
    
    this.clearMap();
    this.setGeotype(geotype);
    console.log(this.includeNeighbors);
    if (this.includeNeighbors){
      this.clearMap();
      this.renderGeoJson({
        walksCollection: this.model.get('walks').currentUser,
        geotype: this.geotype,
        color: this.userColor,
        zIndex: 9999,
        strokeWeight: 4
      });
      this.model.get('walks').neighbors.forEach(function(neighbor, index){
        that.renderGeoJson({
          walksCollection: neighbor,
          geotype: that.geotype,
          color: that.colors[index],
          strokeWeight: 2,
          zIndex: (500 - index)
        });
      });
    } else{
       that.clearMap();
       that.renderGeoJson({
        walksCollection: that.model.get('walks').currentUser,
        geotype: that.geotype,
        color: that.userColor,
        zIndex: 9999,
        strokeWeight: 4
      });
    }
  }
});

LiveWalkView = MapView.extend({
  template: JST['backbone/templates/live_walk'],

  model: Walk,

  el: "#backbone-container",

  render: function(){
    this.$el.html(this.template());
    this.mapCanvasSquare();
    map = new google.maps.Map(document.getElementById("map-canvas"), myApp.mapOptions);
    //poll and recenter map at optimal interval
    myApp.pollPosition();
    this.addMapListeners(map);
    map.setZoom(18);
    map.data.setStyle({
      geotype: "LineString",
      strokeWeight: 2,
      strokeColor: 'black',
      strokeOpacity: 0.5
    });
  },

  initialize: function(){
    this.mapBounds = new google.maps.LatLngBounds();

    this.listenTo($('#map-canvas'), 'click', function(){console.log('click')});
  },
  // after successful post mark, pull current data.toJson and render as a collection with one color, post new mark as a new current position/latest mark color

  //coords longitude/latitude are switched here- why? i am switching them back. was
      // coords = [myApp.currentCoords.longitude, myApp.currentCoords.latitude]; and then accessing their indices backwards
      // !!! This might be a maps api issue

  markWalk: function(event){
    var url, coords = myApp.currentCoords;

    console.log("mark walk **************");
    url = $(event.target).attr('data-post-route');
    this.persistGeolocation(url, coords);
    this.renderGeoJson(coords)
  },

  persistGeolocation: function(url, coords) {
    var that = this,
        geolocationData,
        geolocationAjaxPost,

        // Raw PostGis SQL takes lon/lat
    geolocationData = {mark: {coords: 'POINT(' + coords.longitude + ' ' + coords.latitude + ')',
    accuracy: myApp.currentCoords.accuracy}
                      };

    geolocationAjaxPost = $.ajax({
                              url: url,
                              type: "post",
                              data: geolocationData,
                            });

    geolocationAjaxPost.done(function(response){
      // !!! not very backbone...
      $('#stats').html(response);

      // console.log(this);
      // that.renderGeoJson({
      //   coords: coords,
      // });

    });
  },

  liveWalkGeoJson:
    { type: "FeatureCollection",
      features: [
        { type: "Feature",
				  geometry: {
					  type: "LineString",
					  coordinates: []
			  	},
          properties: {
            geometry: "LineString",
            strokeColor: "#ff292c",
            strokeWeight: 4,
          }
			  },
        { type: "Feature",
				  geometry: {
					  type: "Point"
			  	},
          properties: {
            geometry: "Point",
            strokeColor: "#ff292c",
          }
			  }
      ]
    },

  renderGeoJson: function(coords){
    var geoJson = map.data.toGeoJson.features || this.liveWalkGeoJson;
    geoJson.features[0].geometry.coordinates.push([coords.longitude, coords.latitude]);
    geoJson.features[1].geometry.coordinates = [coords.longitude, coords.latitude];
    this.clearMap();
    map.data.addGeoJson(geoJson);
  }

});
