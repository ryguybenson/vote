$(document).ready(function() {
  var age = parseInt(prompt("What is your age?"));

  if (age > 18) {
    $("#over18").show();
  } else if (age === 18) {
    alert("Welcome to voter world!");
    $("#over18").show();
  } else {
    $("#under18").show();
  }
  
});
