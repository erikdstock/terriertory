var DogView = Backbone.View.extend({
  template: JST["backbone/templates/dog_button"],

  initialize: function() {
    console.log("Creating dog view");
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }

});