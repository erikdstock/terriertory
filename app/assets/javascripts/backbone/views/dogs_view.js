var DogsView = Backbone.View.extend({
  template: JST["backbone/templates/dashboard_dogs"],
  el: "#dogs",

  initialize: function(){
    console.log("Creating dogs view!");
    console.log(this.collection);
    this.listenTo(this.collection, 'reset', this.addAll);
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  addOne: function(dog) {
    var view = new DogView({model: dog});
    view.render();

    this.$el.find("#dogs").append(view.el);

    return this;
  },

  addAll: function() {
    this.collection.each(function(dog){
      this.addOne(dog);
    }, this);

    return this;
  }

});