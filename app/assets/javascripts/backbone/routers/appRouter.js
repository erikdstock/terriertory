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
    var dashboard = new Dashboard();		
		var dogsView = new DogsView({collection: new Dogs()});
    var neighborsView = new NeighborsView({collection: new Neighbors()});
		dogsView.render();
  	neighborsView.render();

    
    dashboard.fetch({
    	//this reset may not be necessary - dashboard doesn't have a view watching it... yet.
    	reset: true,
    	success: function (dashboard, response, options) {
    		console.log("dashboard email: " + dashboard.get("email"));
    		
    	// Resetting views' collections renders model views
    		dogsView.collection.reset(dashboard.get('dogs'));
    	
    	// Neighbors JSON not yet being rendered 
    		// neighborsView.collection.reset(dashboard.get('neighbors'));

    	// Maybe we should render a map too.
    	}
    });

	},

	showWalk: function(){
		console.log ('check out this walk!');
	}

});

