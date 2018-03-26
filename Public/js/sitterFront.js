// Code here handles what happens when a sitter submits their information on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#sit-submit").on("click", function(event) {
    event.preventDefault();
  
    // add a new sitter based on sitter input from sitterSignUp.html
    var newSitter = {
      first_name: $("#first_name").val().trim(),
      last_name: $("#last_name").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim(),
      zip: $("zip").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newSitter)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user they've been added to the list of Critter Sitters.
        alert("You've been added to the list of available Critter Sitters. Thanks for joining!");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#first_name").val("");
    $("#last_name").val("");
    $("#email").val("");
    $("#password").val("");
    $("#zip").val("");
  
  });
  