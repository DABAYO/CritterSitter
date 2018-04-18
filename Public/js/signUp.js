$("#isSitter").on("change", function(e){
    if(e.target.value === "1"){
        $("#animalTypes").show();
    } else {
        $("#animalTypes").hide();
    }
});

function initAC(){
    var input = document.getElementById('address');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        $("#lat").val( place.geometry.location.lat() );
        $("#lng").val( place.geometry.location.lng() );
        });
}