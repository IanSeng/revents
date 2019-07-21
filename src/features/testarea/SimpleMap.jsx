import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react'

const AnyReactComponent = () => <Icon name='marker' size='big' color='red'/>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const {myLatLng} = this.props;
    console.log(myLatLng);
   
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact 
          bootstrapURLKeys={{ key: "AIzaSyDO9C7eoW5gYSaSBK_KxDYZ2d0Vlw2Dqbc" }}
          center= {myLatLng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={myLatLng.lat}
            lng={myLatLng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;