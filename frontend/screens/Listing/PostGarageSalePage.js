import React, { useState} from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Button, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import color from '../Palette';
import tagList from '../fake-data-ListingTag';

function PostGarageSalePage(props) {
    const [tag1, setTag1] = useState('Select tag');
    const [tag2, setTag2] = useState('Select tag');
    const [tag3, setTag3] = useState('Select tag');
    const tags = tagList;

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('datetime');
    const [show, setShow] = useState(false);

const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShow(true);
  };



    function previewGarageSale(){

        
      }
    return (
        <View>
            <Text > Create a Garage Sale </Text>
            <View>
            <View style={styles.fakeMap}>
              <Text>Put MAP here</Text>
            </View>
                <TextInput
                    placeholder="Garage Sale Address" />
                <TextInput
                    placeholder="Description" />

                <Text>ADD IMAGE PICKER HERE</Text>
                <Picker
                    selectedValue={tag1}
                    onValueChange={currentTag => setTag1(currentTag)}>
                    {tags.map(tag => <Picker.Item label={tag} value={tag} />)}
                </Picker>
                <Picker
                    selectedValue={tag2}
                    onValueChange={currentTag => setTag2(currentTag)}>
                    {tags.map(tag => <Picker.Item label={tag} value={tag} />)}
                </Picker>
                <Picker
                    selectedValue={tag3}
                    onValueChange={currentTag => setTag3(currentTag)}>
                    {tags.map(tag => <Picker.Item label={tag} value={tag} />)}
                </Picker>
                <Text>ADD DATE PICKER HERE</Text>
                <View>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
            </View>
            <View>
                <TouchableOpacity style={styles.searchButton} onPress={previewGarageSale}>
                    <Text style={styles.textButton}>PREVIEW</Text>
                </TouchableOpacity>
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
    width: '93%',
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

export default PostGarageSalePage;