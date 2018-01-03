$(document).ready(function(){
  // global variables
  var buttons = ['Chevy Corvette','Chevy Camaro','Ford Mustang','Aston Martin','Koenigsegg','Nascar Race Car','Le Mans Race Car', 'Land Speed Race Car'];

  displayButtons();

  function displayButtons() {
    $('#buttons').empty();
    for (var i = 0; i < buttons.length; i++) {
      var btn = $('<button>', {'id': buttons[i], 'type': 'button', 'class': 'btn btn-info buttons'}).text(buttons[i]);
      $('#buttons').append(btn);
    }
  }



  });
