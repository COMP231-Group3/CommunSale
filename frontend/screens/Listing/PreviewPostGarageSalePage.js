import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Button, Platform, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import color from '../Palette';
import tagList from '../fake-data-ListingTag';
import Recaptcha from 'react-native-recaptcha-that-works';


function PreviewPostGarageSalePage(props) {

    const recaptcha = useRef();

    const send = () => {
        console.log('send!');
        recaptcha.current.open();
    }

    const onVerify = token => {
        console.log('success!', token);
    }

    const onExpire = () => {
        console.warn('expired!');
    }

    // address= '770 Don Mills Rd., North York, ON M3C 1T3'
    // description= 'All house for sale'
    // listing_tag1= 'Furnitures'
    // listing_tag2= 'Kitchenware'
    // listing_tag3= 'Utensils'
    // day1= '2022-10-03'
    // day1_start= '08:00am'
    // day1_end= '06:00pm'
    // day2= '2022-10-04'
    // day2_start= '08:00am'
    // day2_end= '03:00pm'
    // day3= '2022-10-05'
    // day3_start= '08:00am'
    // day3_end= '06:00pm'
    // delete_date= '2022-10-10'
    // picture1_url= 'https://ak1.ostkcdn.com/wp-content/uploads/2017/09/Living-Room-Furniture-1.jpg'
    // picture2_url= 'https://www.falgore.com/wp-content/uploads/2021/05/kitchen-utensils2.jpg'
    // picture3_url= 'https://media2.phoenixnewtimes.com/phx/imager/u/magnum/11403401/sweet_basil_gourmetware-cooking-school-lauren-cusimano.jpg'
    // lat= {43.716408559255}
    // long= {-79.34003573155535}

    return (
        <View style={styles.Container}>
            <Text style={styles.subtitle}>Preview Garage Sale </Text>
            <ScrollView>

            
            <View>
                <View style={styles.fakeMap}>
                    <Text>Put MAP here</Text>
                </View>
                <View>
                    <Text style={styles.textProps}>Address: </Text>
                    <Text style={styles.textContent}>{props.address}</Text>
                </View>
                <View>
                    <Text style={styles.textProps}>Description: </Text>
                    <Text style={styles.textContent}>{props.description}</Text>
                </View>

                <View>
                    <Text style={styles.textProps}>Pictures: </Text>
                    <View style={styles.row}>
                    <View style={styles.fakeImage}>
                        <Text style={{ color: "white" }}>Put image here</Text>
                    </View>
                    <View style={styles.fakeImage}>
                        <Text style={{ color: "white" }}>Put image here</Text>
                    </View>
                    <View style={styles.fakeImage}>
                        <Text style={{ color: "white" }}>Put image here</Text>
                    </View>
                    </View>
                 
                </View>



                <View >
                    <Text style={styles.textProps}>Tags:</Text>
                    <View style={styles.row}>
                        <Text style={styles.textContent}>{props.listing_tag1}</Text>
                        <Text style={styles.textContent}>{props.listing_tag2}</Text>
                        <Text style={styles.textContent}>{props.listing_tag3}</Text>
                    </View>

                </View>


                <View >
                    <Text style={styles.textProps}>Dates:</Text>
                    <View style={styles.row}>
                        <View >

                            <Text style={styles.textContent}>{props.day1}</Text>
                            <View style={styles.row}>
                                <Text style={styles.textContentTag}>From: </Text>
                                <Text style={styles.textTime}>{props.day1_start}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.textContentTag}>To: </Text>
                                <Text style={styles.textTime}>{props.day1_end}</Text>
                            </View>

                        </View>
                        <View>

                            <Text style={styles.textContent}>{props.day2}</Text>
                            <View style={styles.row}>
                                <Text style={styles.textContentTag}>From: </Text>
                                <Text style={styles.textTime}>{props.day2_start}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.textContentTag}>To: </Text>
                                <Text style={styles.textTime}>{props.day2_end}</Text>
                            </View>

                        </View>
                        <View>

                            <Text style={styles.textContent}>{props.day3}</Text>
                            <View style={styles.row}>
                                <Text style={styles.textContentTag}>From: </Text>
                                <Text style={styles.textTime}>{props.day3_start}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.textContentTag}>To: </Text>
                                <Text style={styles.textTime}>{props.day3_end}</Text>
                            </View>

                        </View>
                    </View>



                </View>
            </View>
            <View>
            <Recaptcha
                ref={recaptcha}
                siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                baseUrl="http://google.com"
                onVerify={onVerify}
                onExpire={onExpire}
                size="normal"
            />
            </View>
            <View style={styles.buttonPosition}>
            <View style={styles.row}>
            <TouchableOpacity style={styles.editButton} >
                    <Text style={styles.textButton}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createButton} >
                    <Text style={styles.textButton} onPress={send}>CREATE</Text>
                </TouchableOpacity>
            </View>
             
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 4,
        width: "100%",
        height: "100%",
        paddingTop: 35,
        paddingHorizontal: 16,
    },
    imageContainer: {
        width: '30%'
    },
    row: {
        flexDirection: 'row',
        margin: 2,
    },
    createButton: {
        width: '40%',
        height: 40,
        margin: 12,
        backgroundColor: color.backgroundButton,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        shadowColor: color.shadow,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    editButton: {
        width: '40%',
        height: 40,
        margin: 12,
        backgroundColor: color.teal3,
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '100%',
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    subtitle: {
        marginTop: 12,
        fontSize: 32,
    },
    textProps: {
        marginTop: 12,
        fontSize: 22,
        color: color.backgroundButton,
        fontWeight: "bold"
    },
    textContent: {
        marginRight: 12,
        fontSize: 16,
        fontWeight: "bold"
    },
    textTime: {
        marginRight: 12,
        fontSize: 14,
        fontWeight: "bold"
    },
    textContentTag: {
        color: color.backgroundButton,
        fontWeight: "bold",
        marginLeft: 2
    },
    buttonPosition: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    fakeImage: {
        backgroundColor: color.gray4,
        width: 120,
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        margin: 2
    }

});

export default PreviewPostGarageSalePage;