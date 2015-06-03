var AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('setting up router');
	},

	routes: {
		//currently rails' welcome#index route redirects to /dashboard; this is a url change but doesn't affect bb router functionality
		"backbone": "dashboard",
		//this might not be the right way to start a new cruddy walk
		"walks/:id": "showWalk"
	},

	dashboard: function(){
		var response
    var dashboard = new Dashboard();
    dashboard.fetch({
    	reset: true,
    	// success: function (collection, response, options) {
    		// debugger;
    	// }
    });
    debugger;

		console.log("dashboard email:" + dashboard.get("email"));
		
		var dogsView = new DogsView({collection: dashboard.dogs});
		dogsView.render();

		

    var neighborsView = new NeighborsView({collection: dashboard.neighbors});
    neighborsView.render();

    // dashboard.neighbors.fetch({
    //   reset: true,
    //   success: function(){
    //     console.log("Found neighbors!");
    //   }
    // });

	},

	showWalk: function(){
		console.log ('check out this walk!');
	}

});

