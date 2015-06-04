var Dashboard = Backbone.Model.extend({
  url: "/dashboard",


  initialize: function(){
    // console.log('creating dashboard')
    this.set('dogs', new Dogs());
    this.set ('neighbors', new Neighbors());
  },


  parse: function(data){
    //swap nested JSON collection data with backbone collections
    var dogsCollection = new Dogs(data.dogs);
    data.dogs = dogsCollection;

    var neighborsCollection = new Neighbors(data.neighbors);
    data.neighbors = neighborsCollection;


    return data;
  }

});