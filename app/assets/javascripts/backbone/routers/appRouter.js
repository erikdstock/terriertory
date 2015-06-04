var AppRouter = Backbone.Router.extend({
	initialize: function(){
	},

	routes: {
		//currently rails' welcome#index route redirects to /dashboard; this is a url change but doesn't affect bb router functionality
		"backbone": "dashboard",
		//this might not be the right way to start a new cruddy walk
		"walks/:id": "showWalk"
	},

	dashboard: function(){
    var dashboard = new Dashboard();		
		var dogsView = new DogsView({collection: new Dogs()});
    var neighborsView = new NeighborsView({collection: new Neighbors()});
		dogsView.render();
  	neighborsView.render();

    //by moving the view setting into dashboard's success function these should be unnecessary; they were getting clobbered by fetch's parse and set anyways & so could not hear events anyways.
    // dogsView.listenTo(dashboard, 'reset', dogsView.addAll());
    // neighborsView.listenTo(dashboard, 'reset', neighborsView.addAll());

    dashboard.fetch({
    	reset: true,
    	success: function (dashboard, response, options) {

    		console.log("dashboard email: " + dashboard.get("email"));
    		dogsView.collection.reset(dashboard.get('dogs'));
    		neighborsView.collection.reset(dashboard.get('neighbors'));
    	}
    });

	},

	showWalk: function(){
		console.log ('check out this walk!');
	}

});

