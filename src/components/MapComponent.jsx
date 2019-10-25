import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.google = props.google;
  }

  render() {
    return (
      <Map
        google={this.google}
        zoom={9}
        initialCenter={{ lat: 19.5943885, lng: -97.9526044 }}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapComponent);
