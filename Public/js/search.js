var locations = [];

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 35.8550310, lng: -78.8406265}
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    $.get( "http://localhost:5000/sitters", function( data ) {
      var html = "";
      for( var i = 0; i < data.length; i++ ){
          var current = data[i];
          html += ` <tr>
                      <td>${i+1}</td>
                      <td>${current.firstname} ${current.lastname}</td>
                      <td>${current.email}</td>
                      <td>${ (current.handlesDogs) ? 'Yes' : 'No'}</td>
                      <td>${ (current.handlesCats) ? 'Yes' : 'No'}</td>
                      <td>${ (current.handlesBirds) ? 'Yes' : 'No'}</td>
                      <td>${ (current.handlesReptiles) ? 'Yes' : 'No'}</td>
                      </tr>`
                      locations.push( { lat: parseFloat(current.lat), lng: parseFloat(current.lng) } );
      }

      $("#search-results-table").html(html);

      var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          label: `${i+1}`,
          title: data[i].firstname + ' ' + data[i].lastname
        });
      });

      // Add a marker clusterer to manage the markers.
      var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    });

  }