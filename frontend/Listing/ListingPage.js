import React, {useState} from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import fakeListingData from './fake-data-Listing';
import ListingItem from './ListingItem';

function ListingPage(props) {

const savedListingData = fakeListingData;
const [listingData, setListingData] = useState(savedListingData);
const [isAdmin, setIsAdmin] = useState(false);
function adminDeleteItem(id){
  console.log(`delete item with id=${id}`);
  };
    return (
      <View>
      
        <Text>Sales Nearby:</Text>;
       
        <View>
          <Text>Search Post ID:</Text>
          <TextInput />
        </View>
        <Text>Listings:</Text>;
        <View style={styles.listingContainer}>
        <FlatList
          style={{ flex: 1,}}
          data={listingData}
          keyExtractor={(item) => item.listing_id}
          renderItem={(itemData) => (
             <ListingItem id={itemData.item.listing_id} listingData={itemData.item} deleteItemById={adminDeleteItem} />
          )}
        />
        </View>
        
      </View>
    );  
}
const styles = StyleSheet.create({
  listingContainer: {
    flex: 4,
    paddingTop: 35,
    paddingHorizontal: 16,
  },
  listingItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5
  }
});
export default ListingPage;

