/*global google*/

function initMap() {
  // The location of UWF
  var UWF = {lat: 30.54706, lng: -87.216833};
  // The map, centered at UWF
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: UWF});
  // The marker, positioned at UWF
  var marker = new google.maps.Marker({position: UWF, map: map});
}