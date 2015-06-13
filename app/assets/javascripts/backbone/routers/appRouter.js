var AppRouter = Backbone.Router.extend({
	initialize: function(){
	},

	routes: {
		//currently rails' welcome#index route redirects to /dashboard; this is a url change but doesn't affect bb router functionality
		"backbone": "dashboard",
		//example second route
		"walks/:id": "showWalk"
	},

	dashboard: function(){
		// We may want these vars accessible in global or a MyApp namespace so we can access them later after loading the page? eg mapView below
		var dogsView = new DogsView({collection: new Dogs()});
    var neighborsView = new NeighborsView({collection: new Neighbors()});
    var mapView = myApp.mapView = new MapView({model: new Map()});
		dogsView.render();
    neighborsView.render();
    // mapView.render();

    myApp.dashboard.fetch({
    	success: function (dashboard, response, options) {
    		dogsView.collection.reset(response.dogs);
    		neighborsView.collection.reset(response.neighbors);

        // Parse dashboard walks into currentUser and neighbor walks, centroid into LatLng
        mapView.model.set({
          walks: {
            currentUser: response.walks,
            neighbors: response.neighbors.map(function(neighbor){
              return neighbor["walks"]
            })
          },
          centroid: response.centroid

        });

        mapView.render();
        
        // Load Current User's Walk Collection
        // renderGeoJson  options: {walksCollection || walk || marksCollection || mark, geotype, color/style properties}

        mapView.renderGeoJson({
          walksCollection: mapView.model.get('walks').currentUser,
          geoType: "Polygon",
          color: null 
        });

        // Iterate over neighbors and load each of their walk collections
        mapView.model.get('walks').neighbors.forEach(function(neighbor){
          mapView.renderGeoJson({
            walksCollection: neighbor,
            geoType: "Polygon",
            color: "blue" // this.colors[i] //align colors to indices in mapView.colors array
          });
        });

      }
    });
  },

	showWalk: function(){
		console.log ('check out this walk!');
	}

});

