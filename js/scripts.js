$(document).ready(function() {
  $("#ping-pong").click(function(event) {
    var number = prompt("Enter a number");
    var name = "";
    alert(number);
    for (var i = 0; i <= number; i ++ ) {
      debugger;
      if (i % 15 === 0 ) {
        name = "ping pong";
      } else if (i % 3 === 0) {
        name = "ping";
      } else if (i % 5 === 0) {
        name = "pong";
      } else {
        name = i;
      }

      $("#display").append("<li>" + name + "</li>");

    }
      event.preventDefault();
  });
});
