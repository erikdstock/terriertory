var User = Backbone.Model.extend({
  defaults: {

  },


  initialize: function(){
    this.dogs = new Dogs();
    this.neighbors = new Neighbors();
  }

});



