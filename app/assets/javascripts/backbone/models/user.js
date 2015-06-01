var User = Backbone.Model.extend({
  defaults: {

  },

  //this is an experiment in generating a users dogs... work in progress

  initialize: function(){
    this.dogs = new Dogs();
    this.dogs.url = 'users/' + this.id + '/dogs';
    this.neighbors = new Neighbors();
    this.neighbors.url = 'users/' + this.id + '/neighbors';
  }

  //or just pass the param?
  // dogs = new Dogs({user_id: this.id})
});