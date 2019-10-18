
function initMap() {
  const currentPosition = {
    lat: 19.4978,
    lng: -99.1269,
  };

  const map = new google.maps.Map(
    document.querySelector('.maps'), { zoom: 10, center: currentPosition },
  );

  const marker = new google.maps.Marker({ position: currentPosition, map });
}
