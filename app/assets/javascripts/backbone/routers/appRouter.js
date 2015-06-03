var AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('setting up router');
	},

	routes: {
		//currently rails' welcome#index route redirects to /dashboard; this is a url change but doesn't affect bb router functionality
		"dashboard": "dashboard",
		//this might not be the right way to start a new cruddy walk
		"walks/:id": "showWalk"
	},

	dashboard: function(){
		console.log('rendering dashboard');
    var dashboard = new Dashboard();
    dashboard.fetch();
		console.log("dashboard username:" + dashboard["username"])
		
		
		var dogsView = new DogsView({collection: dashboard.dogs});
		dogsView.render();

		// dashboard.dogs.fetch({
  //     reset: true,
  //     success: function(response){
  //       console.log("Found dogs!");
  //       console.log(response);
  //     }
  //   });

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

