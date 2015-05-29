var user = Backbone.Model.extend({
  defaults: {

  },

  //this is an experiment in generating a users dogs... work in progress

  initialize: function(){
    var dogs = new Dogs();
    this.dogs = dogs.fetch({user_id: this.id});
  }

  //or just pass the param?
  // dogs = new Dogs({user_id: this.id})
});