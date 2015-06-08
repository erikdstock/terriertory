var MapView = Backbone.View.extend({
	template: JST['backbone/templates/map'],
	el: "#map"
	
	initialize: function(){

	},

	render: function(){
		//initial map view?

	},

	setMapHeight: function(){
		//might want to extract map height function to this view
	},

	otherMapViewFunctions: function(){
		//this is made up. things for loading various geojsons and such?
	},

	loadGeoJSON: function(){}

})

/*
collection: {
	myMarks: [{walk objects{marks}}],
	neighborMarks: [{
		neighbor{
			walks{marks}}},
		{neighbor{
			walks{marks}}}]
	}]
}

*/