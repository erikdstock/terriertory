var Dashboard = Backbone.Model.extend({
  url: "/dashboard",


  initialize: function(){
  },


  parse: function(response){
    debugger;
    this.set(response);
    this.set("dogs", new Dogs({collection: response.dogs}));
    this.set("neighbors", new Neighbors({collection: response.neighbors}));
    return response;
  },




  // not needed. was an idea. leaving it here for posterity
  parseDogs: function(){
    var json = this.dogs;
    this.dogs = new Dogs({collection: dogsJson});
    return this;
  },

  parseNeighbors: function(){
    var json = this.neighbors;
    this.neighbors = new Neighbors({collection: json});
    return this;
  }

});