import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, TouchableOpacity, Button, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import color from '../Palette';
import tagList from '../fake-data-ListingTag';

function PostGarageSalePage(props) {
  const [tag1, setTag1] = useState('Select tag');
  const [tag2, setTag2] = useState('Select tag');
  const [tag3, setTag3] = useState('Select tag');
  const tags = tagList;

  const [newDate1, setNewDate1] = useState({ date: new Date(), showDate: false, showTime: false });
  const [counter, setCounter] = useState(1);

  const onChangeDate1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setNewDate1({
      ...newDate1,
      date: newDate1.date.setYear(currentDate.getYear()).setMonth(currentDate.getMonth()).setDate(currentDate.getDate()),
      showDate: false
    });
    console.log({ ...newDate1 });
    // console.log(new Date().setYear(currentDate.getYear()).setMonth(currentDate.getMonth()).setDate(currentDate.getDate()));
  };
  const onChangeDate2 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setNewDate1({ ...newDate1, date: newDate1.date.setHours(currentDate.getHours()).setMinutes(currentDate.getMinites()), showDate: false, showTime: false });
    console.log({ ...newDate1 });
    // console.log(new Date().setYear(currentDate.getYear()).setMonth(currentDate.getMonth()).setDate(currentDate.getDate()));
  };

  const showDatepicker1 = () => {
    setNewDate1({ ...newDate1, showDate: true, showTime: true });
    console.log({ ...newDate1 });
  };

  function previewGarageSale() {

  }

  function addDateTime() {
    if (counter >= 3) {
      setCounter(3);
    } else {
      setCounter(counter + 1);
    }
    console.log(counter);
  }
  return (
    <View style={styles.Container}>
      <Text style={styles.subtitle}>Create a Garage Sale </Text>
      <View>
        <View style={styles.fakeMap}>
          <Text>Put MAP here</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="  Garage Sale Address" />
        </View>
        <View>
          <TextInput
            style={styles.inputStyle}
            placeholder="  Description" />
        </View>

        <Text style={{marginTop: 10}}>ADD IMAGE PICKER HERE</Text>

        <View >
          <View style={styles.inputPicker}>
            <Picker
              
              selectedValue={tag1}
              onValueChange={currentTag => setTag1(currentTag)}>
              {tags.map((tag, index) => <Picker.Item key={index} label={tag} value={tag} />)}
            </Picker>
          </View>
          <View style={styles.inputPicker}>
            <Picker
              selectedValue={tag2}
              onValueChange={currentTag => setTag2(currentTag)}>
              {tags.map((tag, index) => <Picker.Item key={index} label={tag} value={tag} />)}
            </Picker>
          </View>
          <View style={styles.inputPicker}>
            <Picker
              selectedValue={tag3}
              onValueChange={currentTag => setTag3(currentTag)}>
              {tags.map((tag, index) => <Picker.Item key={index} label={tag} value={tag} />)}
            </Picker>
          </View>
        </View>
      

        <View>
          <View>
          <View style={styles.row}>
          <Text  style={{marginTop: 15}}>ADD DATE</Text>
          <TouchableOpacity style={styles.AddButton} onPress={showDatepicker1}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
            {newDate1.showTime && (
              <DateTimePicker
                display="spinner"
                testID="timePicker1"
                value={newDate1.date}
                mode="time"
                is24Hour={false}
                onChange={onChangeDate2}
                minuteInterval={10}
              />
            )}
          </View>
          <View>
            <Text>selected: {newDate1.date.toLocaleString()}</Text>
            {newDate1.showDate && (
              <DateTimePicker
                display="spinner"
                testID="datePicker1"
                value={newDate1.date}
                mode='date'
                onChange={onChangeDate1}
                maximumDate={new Date(2023, 12, 31)}
                minimumDate={new Date()}
              />
            )}
          </View>

        </View>
      </View>
      <View style={styles.buttonPosition}>
        <TouchableOpacity style={styles.previewButton} onPress={previewGarageSale}>
          <Text style={styles.textButton}>PREVIEW</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    margin: 2,
  },
  previewButton: {
    width: '40%',
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
  AddButton: {
    width: 30,
    height: 30,
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
  DateButton: {
    width: 30,
    height: 30,
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
    width: '100%',
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 32,
  },
  inputStyle: {
    borderColor: color.gray4,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5
  },
  inputPicker: {
    borderColor: color.gray4,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    width: "50%",
    height: 40,
    justifyContent: "center",
   
  },
  buttonPosition: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45
  }

});

export default PostGarageSalePage;