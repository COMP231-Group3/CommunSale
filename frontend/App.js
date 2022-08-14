import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListingPage from './screens/Listing/ListingPage';
import  PostGarageSalePage from './screens/Listing/PostGarageSalePage';
import PreviewPostGarageSalePage from './screens/Listing/PreviewPostGarageSalePage';
import color from './screens/Palette';

import Profile from './profile/profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your application.</Text> */}
      {/* <ListingPage /> */}
      {/* <PostGarageSalePage /> */}
      <PreviewPostGarageSalePage 
        address= '770 Don Mills Rd., North York, ON M3C 1T3'
        description= 'All house for sale'
        listing_tag1= 'Furnitures'
        listing_tag2= 'Kitchenware'
        listing_tag3= 'Utensils'
        day1= '2022-10-03'
        day1_start= '08:00am'
        day1_end= '06:00pm'
        day2= '2022-10-04'
        day2_start= '08:00am'
        day2_end= '03:00pm'
        day3= '2022-10-05'
        day3_start= '08:00am'
        day3_end= '06:00pm'
        delete_date= '2022-10-10'
        picture1_url= 'https://ak1.ostkcdn.com/wp-content/uploads/2017/09/Living-Room-Furniture-1.jpg'
        picture2_url= 'https://www.falgore.com/wp-content/uploads/2021/05/kitchen-utensils2.jpg'
        picture3_url= 'https://media2.phoenixnewtimes.com/phx/imager/u/magnum/11403401/sweet_basil_gourmetware-cooking-school-lauren-cusimano.jpg'
        lat= {43.716408559255}
        long= {-79.34003573155535}
      />
      {/* <Profile /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroungColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
