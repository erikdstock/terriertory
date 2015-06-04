var Dashboard = Backbone.Model.extend({
  url: "/dashboard",


  initialize: function(){
    // console.log('creating dashboard')
    this.set('dogs', new Dogs());
    this.set ('neighbors', new Neighbors());
    this.listenTo(this, 'reset', this.parseNestedModels)
  },


  parse: function(data){

    //// this turned out not to be necessary. still looks cool. Backbone.Model.parse by default takes the response from a fetch and passes it to build the model's object. parse can tweak that data to prepare it for processing- it's intended for unideal apis. anyhow, we didn't need it. 
    //swap nested JSON collection data with backbone collections
    // var dogsCollection = new Dogs(data.dogs);
    // data.dogs = dogsCollection;

    // var neighborsCollection = new Neighbors(data.neighbors);
    // data.neighbors = neighborsCollection;

    return data;
  },



});