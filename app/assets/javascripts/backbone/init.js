//This is specific for the dashboard. It will eventually need its own file, or we will need to add routes.

$(document).ready( function(){
  var user = new User({id: 1});

  var dogsView = new DogsView({collection: user.dogs})

  user.dogs.fetch({
    success: function(){
      console.log("Found dogs!");
    }
  });
});