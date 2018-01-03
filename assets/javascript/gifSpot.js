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

  $(".buttons").on("click", function(event) {
    event.preventDefault();

      var query = $(this).attr('id');
      var q = query.replace(' ', '+');
      console.log('q', q);
      var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=qkaEriFpJGD4wsNP9Um6v9eqkQd3puIU&limit=10&q=" + q;
      $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            console.log(response);
            // var imageUrl = response.data.image_original_url;
            //
            // var catImage = $("<img>");
            //
            // catImage.attr("src", imageUrl);
            // catImage.attr("alt", "cat image");
            //
            // $("#images").prepend(catImage);
          });

    });

  });
