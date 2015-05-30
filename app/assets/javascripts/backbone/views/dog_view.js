var DogView = Backbone.View.extend({
  template: JST["backbone/templates/dog_button"],
  detailTemplate: JST["backbone/templates/dog_details"],

  initialize: function() {
    console.log("Creating dog view");
  },

  events: {
    "click": "toggleDetails"
  },

  toggleDetails: function(e){
    e.preventDefault();
    this.$el.find(".dog-details").toggle();
    // $(e.currentTarget).toggle(
      // function(){
      //   console.log("Details On!!");
      //   self.detailsOn();
      // },
      // function() {
      //   console.log("Details Off!!");
      //   self.detailsOff();
      // }
    // );
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
  },

  detailsOn: function() {
    this.$el.append(this.detailTemplate(this.model.attributes));
  },

  detailsOff: function() {
    this.$el.remove(".dog-details");
  }
});