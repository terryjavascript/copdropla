function initMap(){
    //map options
    var options = {
        zoom:8,
        center:{lat:34.0522, lng:-118.2437}
    }

    //new map
    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    //new markers per clicks

    google.maps.event.addListener(map, 'click',
        function(event){
            addMarker({coords:event.latLng});
        });

    /*
    // Add Marker
    var marker = new google.maps.Marker({
        position:{lat:40.4168, lng:-3.7038},
        map:map
        //change marker icons
        //icon:
    });

    //information of markers

        var infoWindow = new google.maps.InfoWindow({
            content: '<h4> start </h4>'
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        }); 
        */

        addMarker({coords:{lat:34.0522, lng:-118.2437}});
        


        //Add Marker Function 
        function addMarker(props){
            var marker = new google.maps.Marker({
                position:props.coords,
                map:map,
                icon:props.iconIMage
        //change marker icons
        
                });

            }

        };