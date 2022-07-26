import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import color from '../Palette';

function ListingItem(props) {

    function adminDeleteHandler() {
        props.deleteItemById(props.id);
    }
    return (

        <View style={styles.container}>

           
                <View style={styles.divider}>
                    <View style={styles.imageContainer}>
                        {/* ADD IMAGE HERE */}
                        <View style={styles.fakeImage}>
                            <Text style={{ color: "white" }}>Put image here</Text>
                        </View>
                        {/* <Image 
                        source={{uri: props.listingData.picture1_url}}
                        style={{width: 100, height: 100}}
                    /> */}
                    </View>
                    <View style={styles.infoContainer}>

                        <Text style={styles.description}>{props.listingData.description}</Text>
                        <Text style={styles.textAddress}>{props.listingData.address}</Text>
                        <View stryle={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={styles.textDate}>{props.listingData.day1} open: {props.listingData.day1_start} close: {props.listingData.day1_end}</Text>
                            </View>
                            <View>
                                <Text style={styles.textDate}>{props.listingData.day2} open: {props.listingData.day2_start} close: {props.listingData.day2_end}</Text>
                            </View>
                            <View>
                                <Text style={styles.textDate}>{props.listingData.day3} open: {props.listingData.day3_start} close: {props.listingData.day3_end}</Text>
                            </View>
                        </View>


                        <View style={styles.listingTagContainer}>
                            <View style={styles.listing_tag}>
                                <Text style={styles.listingTagText} >{props.listingData.listing_tag1}</Text>
                            </View>
                            <View style={styles.listing_tag}>
                                <Text style={styles.listingTagText} >{props.listingData.listing_tag2}</Text>
                            </View>
                            <View style={styles.listing_tag}>
                                <Text style={styles.listingTagText} >{props.listingData.listing_tag3}</Text>
                            </View>
                        </View>
                        <View style={styles.buttonPosition}>
                            <Pressable style={styles.deleteButton} onPress={adminDeleteHandler}>
                                <Text style={styles.textButton}>Delete</Text>
                            </Pressable>
                        </View>



                    </View>

                </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 6,
        margin: 6,
        borderRadius: 10,
        backgroundColor: color.backgroundItem,
        shadowColor: color.shadow,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 15
    },
    divider: {
        flex: 1,
        flexDirection: 'row'
    },
    imageContainer: {
        width: '30%'
    },
    infoContainer: {
        width: '70%',
        marginLeft: 15,
    },
    info: {
        marginRight: 8,
    },
    description: {
        fontSize: 22,
        fontWeight: "bold",
        color: color.textDescription
    },
    listingTagContainer: {
        flex: 1,
        flexDirection: "row"
    },
    listing_tag: {
        margin: 6,
        height: 22,
        backgroundColor: color.backgroundTag,
        borderRadius: 50,

    },
    listingTagText: {
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 4,
        marginTop: 2,
        color: color.textTag,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 0.5,
    },
    fakeImage: {
        backgroundColor: color.gray4,
        width: 150,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    deleteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.backgroundButton,
        width: 70,
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
        color: 'white',
        margin: 5,
    },
    buttonPosition: {
        position: 'absolute',
        right: 10,
        padding: 10,

    },
    textAddress: {
        color: color.textAddress,
        fontSize: 14,
    
    },
    textDate: {
        color: color.textDate,
        fontSize: 12,
    }

});

export default ListingItem;

