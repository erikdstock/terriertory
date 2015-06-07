
//instantiate router immediately
var appRouter = new AppRouter;
var myApp = {
	dashboard: new Dashboard
}

$(document).ready( function(){
	//loading animation?

	// begin polling location at app.currentPosition

	// begin bb history & load page
	Backbone.history.start()
});