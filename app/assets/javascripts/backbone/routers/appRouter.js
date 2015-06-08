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
        var mapView = new MapView({model: new Map()});
		dogsView.render();
      	neighborsView.render();
        
        myApp.dashboard.fetch({
        	success: function (dashboard, response, options) {
        		console.log(response);
        		dogsView.collection.reset(response.dogs);
        		neighborsView.collection.reset(response.neighbors);

                // Parse dashboard walks into currentUser and neighbor walks
                mapView.model.set({walks: {
                    currentUser: response.walks,
                    neighbors: response.neighbors.map(function(neighbor){
                            neighbor["walks"]
                    })
                }});
        	}
        });
    },



	showWalk: function(){
		console.log ('check out this walk!');
	}

});

