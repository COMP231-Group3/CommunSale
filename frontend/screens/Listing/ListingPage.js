import React, {useState, Component} from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, SafeAreaView  } from 'react-native';
import fakeListingData from '../fake-data-Listing';
import ListingItem from './ListingItem';
import color from '../Palette';
import MapScreen from '../Map/Map';

function ListingPage(props) {

const savedListingData = fakeListingData;
const [listingData, setListingData] = useState(savedListingData);
const [isAdmin, setIsAdmin] = useState(false);
const [searchInput, setSearchInput] = useState('');

const renderItem = ({ itemData }) => (
  <ListingItem key={itemData.item.listing_id} id={itemData.item.listing_id} listingData={itemData.item} deleteItemById={adminDeleteItem} />
);

let inputProps = {
  lat: 43.67822330531455,
  long: -79.40943317388638,
  address: '1 Austin Terrace, Toronto, ON M5R 1X8',
  description: 'Fancy Garage Sale'
};

function adminDeleteItem(id){
  console.log(`delete item with id=${id}`);
  };

function searchId(){

  // *** ADD SEARCH FUNCTION HERE ***

  console.log(`search for ${searchInput}`)
 
}
function searchIdHandler(id){
  setSearchInput(id);
}
    return (
      <View>
      
        <Text style={styles.subtitle}>Sales Nearby:</Text>
       <View style={styles.fakeMap}>
        <MapScreen {...inputProps} />
       </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput  id="textInput" style={styles.input} placeholder='Search Post ID' onChangeText={searchIdHandler} />
          <TouchableOpacity style={styles.searchButton} onPress={searchId}>
            <Text style={styles.textButton}>SEARCH</Text>
          </TouchableOpacity>
         
        </View>
        <Text style={styles.subtitle}>Listings:</Text>
        <View style={styles.listingContainer}>
       
        <FlatList
          style={{ flex: 1, width: '100%'}}
          data={listingData}
          keyExtractor={(item) => item.listing_id}
          renderItem={(itemData) => {
            console.log(itemData.item.description)
            return (
             <View>
              <Text>{itemData.item.description}</Text> 
              <ListingItem key={itemData.item.listing_id} id={itemData.item.listing_id} listingData={itemData.item} deleteItemById={adminDeleteItem} />
            </View>
            );
          }}
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 5,
  },
  searchButton: {
    width: '20%',
    height: 40,
    margin: 12,
    backgroundColor: color.backgroundButton,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.backgroundButton,
    borderRadius: 4,
    shadowColor: color.shadow,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },    
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: color.textButton,
    margin: 5,
},
fakeMap: {
  backgroundColor: color.gray4,
  margin: 16,
  // width: '93%',
  height: 350,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 5,
},
subtitle: {
  marginTop: 12,
  marginLeft: 32,
  fontSize: 32,
}
  
});





class DataTable extends Component {

    deleteUser(e) {
      function DeleteItem(id){
        console.log(`delete item =${id}`);
        };
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.company}
                </td>
                <td>

 <Button onClick={() => this.DeleteItem}
className='btnsDelete'
buttonStyle='btn--delete'
buttonSize='btn--small'
buttonColour='red' >

                            </Button>
                </td>
            </tr>
        );
    }
}
export default ListingPage;

