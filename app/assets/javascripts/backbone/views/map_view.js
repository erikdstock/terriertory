var MapView = Backbone.View.extend({
	template: JST['backbone/templates/map'],
	el: "#map",
	model: Map,
	
	initialize: function(){

	},

	render: function(){
		this.$el.html(this.template());
		this.mapCanvasSquare();
		
		

	},


	currentUserGeoJSON: function(){
		this.geoJSON = {}
		this.geoJSON["coordinates"] = this.walks["currentUser"]//...make geojson

		console.log(geoJSON)
	},

	mapCanvasSquare: function() {
	  console.log('setting square map layout');
		var $width = document.documentElement.clientWidth;
  	var $height = $('.top-bar').height();
	  $('#map-canvas').css({
	    "height": $width,
	    // "position": "fixed",
	    // "top": $height,
	    "background-color": "grey"
	  });
	},



	setMapHeight: function(){
		//might want to extract map height function to this view
	},

	otherMapViewFunctions: function(){
		//this is made up. things for loading various geojsons and such?
	},

	loadGeoJSON: function(){}

})
