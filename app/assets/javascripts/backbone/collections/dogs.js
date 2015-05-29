var Dogs = Backbone.Collection.extend({
  model: Dog,
  //trying to figure out nested routes
  url: "users/" + user_id + "/dogs"
});