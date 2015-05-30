$(document).ready( function(){
  var user = new User({id: 1});
  user.dogs.fetch({
    success: function(){
      console.log("Found dogs!");
    }
  }).done(function(){
    // debugger;
  });
});