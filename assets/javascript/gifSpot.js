$(document).ready(function() {
      // global variables
      var buttons = ['Chevy Corvette', 'Chevy Camaro', 'Ford Mustang', 'Aston Martin', 'Koenigsegg', 'Nascar Race Car', 'Le Mans Race Car', 'Land Speed Race Car'];
      var query;

      displayButtons();

      function displayButtons() {
        $('#buttons').empty();
        for (var i = 0; i < buttons.length; i++) {
          var btn = $('<button>', {
            'id': buttons[i],
            'type': 'button',
            'class': 'btn btn-info buttons'
          }).text(buttons[i]);
          $('#buttons').append(btn);
        }

        $('.buttons').on('click', function(event) {
          event.preventDefault();
          query = $(this).attr('id');
          console.log(query);
          displayGifs();
        });

      };

      function displayGifs() {
        var q = query.replace(' ', '+');
        console.log('q', q);
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qkaEriFpJGD4wsNP9Um6v9eqkQd3puIU&limit=10&q=" + q;
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          $('#main-column').empty();
          for (var i = 0; i < response.data.length; i++) {
            var gifUrl = response.data[i].images.fixed_height.url;
            console.log(query + ' gif');
            var gifImage = $('<img>');

            gifImage.attr('src', gifUrl);
            gifImage.attr('alt', query + ' gif');
            gifImage.attr('class', 'gifs');

            $('#main-column').append(gifImage);
          }
        });
      };

          $('#add').on('click', function(event) {
            event.preventDefault();
            var newBtn = $('#newButton').val().trim();
            buttons.push(newBtn);
            displayButtons();
          });

        });
