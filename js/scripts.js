$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    var number = prompt("Enter a number up to 100");
    var int = 0;
    var name = "";

    for(int = 1; int <= number; int += 1) {
      if(int % 3 === 0 && int % 5 === 0) {
        name = "ping pong";
      } else if(int % 3 === 0) {
        name = "ping";
      } else if(int % 5 === 0) {
        name = "pong";
      } else {
        name = int;
      }
      $("#display").append("<li>" + name + "</li>");
    }
      event.preventDefault();
  });
});
