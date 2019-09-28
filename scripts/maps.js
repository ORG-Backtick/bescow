
function initMap() {
  let currentPosition = {
    lat: 19.4978,
    lng: -99.1269,
  };

  let map = new google.maps.Map(
    document.querySelector('.maps'), { zoom: 10, center: currentPosition },
  );

  let marker = new google.maps.Marker({ position: currentPosition, map: map });
}
