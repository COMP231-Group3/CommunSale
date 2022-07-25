import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { mapStyle } from './mapStyle';

export function MapScreen() {

  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 43.78422057,
          longitude: -79.2332062,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        mapType="standard"
      >
        <Marker
            draggable
            coordinate={{
              latitude: 43.78422057,
              longitude: -79.2332062,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Campus Marker'}
            description={'Centennial Collge, Progress'}
          />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
