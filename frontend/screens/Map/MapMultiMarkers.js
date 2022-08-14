import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useState } from 'react';

import { mapStyle } from './mapStyle';

import fakeListingData from '../fake-data-Listing';

const MapMultiMarker = (props) => {
  
    return (
      
      <View style={styles.container}>

        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: 43.68597005483103, 
            longitude: -79.3665753522417,
            // latitudeDelta: 0.2922,
            // longitudeDelta: 0.2421
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          mapType="standard"
        >
          {fakeListingData.map((marker) => (
          <Marker
            key={marker.listing_id}
            coordinate={{
              latitude: marker.lat,
              longitude: marker.long,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={marker.address}
            description={marker.description}
          ></Marker>
        ))}
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

export default MapMultiMarker;
