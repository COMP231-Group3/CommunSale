import React, { Component } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import fakeListingData from './fake-data-Listing';

class ListingPage extends Component {
    constructor(props) {
        super(props);
        const savedListingData = fakeListingData;
        this.state = {listingData: savedListingData, isAdmin: false}
    }
    
    render() {
      return (
      <View>
        {/* Add Header here*/}
        <Text>Sales Nearby:</Text>;
        {/* Add GOOGLE MAP here */}
        <View>
            <Text>Search Post ID:</Text>
            <TextInput />
        </View>
        <Text>Listings:</Text>;
        <FlatList data={this.state.listingData} renderItem={(itemData) => {
            return(
                 {/* Add Listing Item here */}
            );
        }} /> 
      </View>)
        
      ;
    }
  }
  
  export default ListingPage;