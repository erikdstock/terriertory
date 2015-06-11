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
        // hoist view into myapp
        var mapView = myApp.mapView = new MapView({model: new Map()});
		dogsView.render();
    	neighborsView.render();
        mapView.render();

        myApp.dashboard.fetch({
        	success: function (dashboard, response, options) {
        		console.log("dashboard fetch response!")
                console.log(response);
                console.log("walks")
                console.log(response.walks)
        		dogsView.collection.reset(response.dogs);
        		neighborsView.collection.reset(response.neighbors);

                // Parse dashboard walks into currentUser and neighbor walks
                mapView.model.set({walks: {
                    currentUser: response.walks,
                    neighbors: response.neighbors.map(function(neighbor){
                        return neighbor["walks"]
                    })
                }});

                mapView.addUsersWalks(mapView.model.get('walks').currentUser);

                mapView.model.get('walks').neighbors.forEach(function(neighbor){
                    console.log(neighbor);
                    neighbor.forEach(function(walk){
                        mapView.addWalkGeoJson(walk, "polygon");
                    });
                });

                console.log(mapView.geoJSON);


        	}
        });
    },



	showWalk: function(){
		console.log ('check out this walk!');
	}

});

