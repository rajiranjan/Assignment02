function initMap(){
    var center = {lat:37.7749,lng:-122.4194}
    var options = {
        zoom: 5,
        center: center
    };
    var map = new google.maps.Map(document.getElementById("map"),options)
}