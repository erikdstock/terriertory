


var Dashboard = Backbone.Model.extend({
  url: "/dashboard",


  initialize: function(){
    this.dogs = new Dogs();
    this.neighbors = new Neighbors();
  },


});


