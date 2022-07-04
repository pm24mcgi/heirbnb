import React from 'react';
import { useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api'
import './maps.css'



const Maps = ({GMapKey}) => {
  console.log(GMapKey, "I MADE IT!!!!!!!!!!!")

  const [result, setResult] = useState({lat: 38.57528494361009, lng: -90.2932520234125})

  const containerStyle = {
    height: '100%',
    width: '100%'
  };

  const center = {lat: result.lat, lng: result.lng}

  const {isLoaded} = useJsApiLoader ({
    googleMapsApiKey: GMapKey,
    id: 'google-map-script'
  });

  return (
    <div>
      {isLoaded && (
        <div className='MapsMain'>
          <GoogleMap center={center} zoom={12} mapContainerStyle={containerStyle}>
            <Marker position={center} />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default Maps;
