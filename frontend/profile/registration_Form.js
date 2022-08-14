import React from 'react';
import { Button, TextInput, Alert, Button, SafeAreaView, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

export const registrationForm = () => (

    <Formik
        initialValues={{email:'', passwordOne: '', passwordTwo:'', homeStNum:'', homeStName: '',
    homeCity:'', homePostal:'', homeProv:''}}
    onSubmit={values => Alert.alert(JSON.stringify(values))}
    validationSchema={yup.object().shape({
        email: yup
        .string()
        .required('Email is required'),
        passwordOne: yup
        .string()
        .min(8, 'Password length must be between 8 and 20 characters')
        .max(20, 'Password length must be between 8 and 20 characters')
        .required('Password is required!'),
        passwordTwo: yup
        .string()
        .min(8, 'Password length must be between 8 and 20 characters')
        .max(20, 'Password length must be between 8 and 20 characters')
        .oneOf([yup.ref('password'), null], 'Passwords Must Match')
        .required('Must have a confirmed password'),
        homeStNum: yup
        .string()
        .required('Street Number Required'),
        homeStName: yup
        .string()
        .required('Street Name Required')
        ,
        homeCity: yup
        .string()
        .required('City is Required')
        ,
        homePostal: yup
        .string()
        .required('Postal Code is required')
        ,
        homeProv: yup
        .string()
        .required('Province is Required')
        ,
    })}>
       {({ handleChange, handleBlur, handleSubmit, touched, values, errors, 
        isValid  }) => (
        <SafeAreaView style={styles.container}>
            <View>
                <image style={styles.logo} source={require('../assets/smLogo.jpg')}></image>
                <text style ={{fontsize: 16, fontWeight: 'bold'}}>Save and Sell Local</text>
                <text style ={{fontsize: 12}}>Complete the Following Fields to Register!</text>
            </View>
            <text style ={{fontsize: 8}}>Email:</text>
            <TextInput onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="email@domain.com"/>
            {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.email}</Text>}
              <text style ={{fontsize: 8}}>Password between 8 and 20 characters:</text>
            <TextInput onChangeText={handleChange('passwordOne')}
            onBlur={handleBlur('passwordOne')}
            value={values.passwordOne}
            placeholder="Password"
            secureTextEntry={true}/>
            {touched.passwordOne && errors.passwordOne &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.passwordOne}</Text>}
              <text style ={{fontsize: 8}}>Confirm Password:</text>
            <TextInput onChangeText={handleChange('passwordTwo')}
            onBlur={handleBlur('passwordTwo')}
            value={values.passwordTwo}
            placeholder="SamePassword"
            secureTextEntry={true}/>
            {touched.passwordTwo && errors.passwordTwo &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.passwordTwo}</Text>}
              <text style ={{fontsize: 8}}>Street Number:</text>
            <TextInput onChangeText={handleChange('homeStNum')}
            onBlur={handleBlur('homeStNum')}
            value={values.homeStNum}
            placeholder="123"/>
            {touched.homeStNum && errors.homeStNum &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.homeStNum}</Text>}
              <text style ={{fontsize: 8}}>Street Name:</text>
            <TextInput onChangeText={handleChange('homeStName')}
            onBlur={handleBlur('homeStName')}
            value={values.homeStName}
            placeholder="Main Street"/>
            {touched.homeStName && errors.homeStName &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.homeStName}</Text>}
              <text style ={{fontsize: 8}}>City:</text>
            <TextInput onChangeText={handleChange('homeCity')}
            onBlur={handleBlur('homeCity')}
            value={values.homeCity}
            placeholder="Toronto"/>
            {touched.homeCity && errors.homeCity &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.homeCity}</Text>}
              <text style ={{fontsize: 8}}>Postal Code:</text>
            <TextInput onChangeText={handleChange('homePostal')}
            onBlur={handleBlur('homePostal')}
            value={values.homePostal}
            placeholder="0H0 H0H"/>
            {touched.homePostal && errors.homePostal &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.homePostal}</Text>}
              <text style ={{fontsize: 8}}>Province:</text>
            <TextInput onChangeText={handleChange('homeProv')}
            onBlur={handleBlur('homeProv')}
            value={values.homeProv}
            placeholder="Ontario"/>
            {touched.homeProv && errors.homeProv &&
              <Text style={{ fontSize: 12, color: 'red' }}>{errors.homeProv}</Text>}
            <Button color='7d53de' onPress={handleSubmit} disabled={!isValid} title="Register" />                        
        </SafeAreaView>
       )} 
    </Formik>
);
const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        flex:0.3, 
        alignItems: "center",
        justifyContent: "center"
    },
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  width: '70%',
  borderRadius: 5,
},

})
