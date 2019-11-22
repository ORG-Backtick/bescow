import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.google = props.google;
    this.locations = props.locations;
    this.state = {
      showInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarketClick = (propsMarker, marker) => {
    this.setState({
      selectedPlace: propsMarker,
      activeMarker: marker,
      showInfoWindow: true,
    });
  };

  render() {
    const { selectedPlace, activeMarker, showInfoWindow } = this.state;
    return (
      <Map
        google={this.google}
        zoom={11}
        initialCenter={{
          lat: this.locations[0].location.lat,
          lng: this.locations[0].location.long }}
      >
        {this.locations.map((item) => {
          return (
            <Marker
              key={item._id}
              title={item.location.name}
              name={item.location.name}
              position={{ lat: item.location.lat, lng: item.location.long }}
              onClick={this.onMarketClick}
            />
          );
        })}
        <InfoWindow marker={activeMarker} visible={showInfoWindow}>
          <div><h3>{selectedPlace.name}</h3></div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapComponent);
