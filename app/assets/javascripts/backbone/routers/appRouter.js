var AppRouter = Backbone.Router.extend({
	initialize: function(){
	},

	routes: {
		"backbone": "dashboard",
    "live-walk": 'liveWalk'
	},

	dashboard: function(){
    myApp.stopPollingPosition();
		// We may want these vars accessible in global or a MyApp namespace so we can access them later after loading the page? eg mapView below
		var dogsView = new DogsView({collection: new Dogs()});
    var neighborsView = new NeighborsView({collection: new Neighbors()});
    var mapView = myApp.mapView = new MapView({model: new Map()});


    myApp.dashboard.fetch({
    	success: function (dashboard, response, options) {
        dogsView.render();
        neighborsView.render();
        dogsView.collection.reset(response.dogs);
        neighborsView.collection.reset(response.neighbors);

        // Parse dashboard walks into currentUser and neighbor walks, centroid into LatLng ... and don't set undefined collections, use null
        mapView.model.set({
          walks: {
            currentUser: response.walks || null,
            neighbors: (response.neighbors) ? response.neighbors.map(function(neighbor){
              return neighbor["walks"]
            }) : null
          },
          centroid: response.centroid || myApp.mapOptions.center

        });
        mapView.render();

        // Load Current User's Walk Collection
        // renderGeoJson  options: {walksCollection || walk || marksCollection || mark, geotype, color/style properties}

        mapView.renderGeoJson({
          walksCollection: mapView.model.get('walks').currentUser,
          geotype: "Polygon",
          color: mapView.userColor,
          zIndex: 9999,
          strokeWeight: 4
        });

      }
    });
  },

  liveWalk: function(){
    var liveWalkView = myApp.liveWalkView = new LiveWalkView({model: new Walk()});
    liveWalkView.render();
  }


});

