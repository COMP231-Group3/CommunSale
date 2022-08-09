import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListingPage from './screens/Listing/ListingPage';
import  PostGarageSalePage from './screens/Listing/PostGarageSalePage'
import color from './screens/Palette';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your application.</Text>
      <ListingPage />
      {/* <PostGarageSalePage /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroungColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
