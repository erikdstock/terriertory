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
		// We may want these vars accessible in global or a MyApp namespace so we can access them later after loading the page?
		var dogsView = new DogsView({collection: new Dogs()});
    var neighborsView = new NeighborsView({collection: new Neighbors()});
      // mapView in global namespace- is this a good pattern?
    var mapView = myApp.mapView = new MapView({model: new Map()});
		dogsView.render();
    neighborsView.render();
    mapView.render();

    myApp.dashboard.fetch({
    	success: function (dashboard, response, options) {
    		dogsView.collection.reset(response.dogs);
    		neighborsView.collection.reset(response.neighbors);

        // Parse dashboard walks into currentUser and neighbor walks
        mapView.model.set({walks: {
            currentUser: response.walks,
            neighbors: response.neighbors.map(function(neighbor){
                return neighbor["walks"]
            })
        }});

        // Load Current User's Walk Collection
        mapView.addUsersWalks(mapView.model.get('walks').currentUser);

        // Iterate over neighbors and load each of their walk collections
        mapView.model.get('walks').neighbors.forEach(function(neighbor){
          neighbor.forEach(function(walk){
            mapView.addWalkGeoJson(walk, "polygon");
          });
        });

      }
    });
  },



	showWalk: function(){
		console.log ('check out this walk!');
	}

});

