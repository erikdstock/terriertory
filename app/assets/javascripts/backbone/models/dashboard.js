var Dashboard = Backbone.Model.extend({
  url: "dashboard",


  initialize: function(){
    this.dogs = new Dogs();


    // delete 
    // this.dogs.url = 'users/' + this.id + '/dogs';
    this.neighbors = new Neighbors();
    // this.neighbors.url = 'users/' + this.id + '/neighbors';
  },

  // parse: function(response){
  //   // this.dogs: new Dogs({collection: response.dogs})
  // }

  //or just pass the param?
  // dogs = new Dogs({user_id: this.id})
});