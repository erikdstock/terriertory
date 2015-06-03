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

	//how to actually find rails' current_user for dashboard?
	dashboard: function(){
		console.log('rendering dashboard');
    var user = new User({id: 1});

		var dogsView = new DogsView({collection: user.dogs});
		dogsView.render();

		user.dogs.fetch({
      reset: true,
      success: function(response){
        console.log("Found dogs!");
        console.log(response);
      }
    });

    var neighborsView = new NeighborsView({collection: user.neighbors});
    neighborsView.render();

    user.neighbors.fetch({
      reset: true,
      success: function(){
        console.log("Found neighbors!");
      }
    });

	},

	showWalk: function(){
		console.log ('check out this walk!');
	}

});

