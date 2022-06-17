import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export interface MapViewComponentProps {
  Latitude: number;
  Longitude: number;
}

function MapViewComponent({Latitude, Longitude}: MapViewComponentProps) {
  return (
    <MapView
      // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: Latitude,
        longitude: Longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.0121,
      }}>
      <Marker
        coordinate={{
          latitude: Latitude,
          longitude: Longitude,
        }}>
        <Image
          source={require('../../Assets/pinSelected.png')}
          style={styles.imgPin}
          resizeMode={'center'}
        />
      </Marker>
    </MapView>
  );
}
export default MapViewComponent;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 200,
  },
  imgPin: {height: 40, width: 40, alignSelf: 'center'},
});
