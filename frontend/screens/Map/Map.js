import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState } from 'react';

import { mapStyle } from './mapStyle';

const MapScreen = (props) => {
  const [mapRegion] = useState(props);

    return (
      
      <View style={styles.container}>

        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: mapRegion.lat,
            longitude: mapRegion.long,
            // latitudeDelta: 0.3922,
            // longitudeDelta: 0.3421
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          mapType="standard"
        >
          <Marker
            draggable
            coordinate={{
              latitude: mapRegion.lat,
              longitude: mapRegion.long,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={mapRegion.address}
            description={mapRegion.description}
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
    height: 350,
  },
});

export default MapScreen;
