import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get('window');

const VerifyOtpPage = () => {
  const navigation = useNavigation();
  const [otpArray, setOtpArray] = useState(['', '', '', '']); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputs = useRef([]);


  const handleInputChange = (text, index) => {
      if (isNaN(text)) return; 

      const newOtpArray = [...otpArray];
      newOtpArray[index] = text;
      setOtpArray(newOtpArray);

      if (text && index < inputs.current.length - 1) {
          inputs.current[index + 1].focus();
      }
  };

  
  

  return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText1}>Ollo</Text>
          <Text style={styles.logoText}>Hi Welcome to OLLO 👋🏻</Text>
        </View>

       
        <Text style={styles.title}>Please Enter OTP sent to given Mobile Number</Text>
        

       
        <View style={styles.verificationContainer}>
                {otpArray.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.circleInput}
                        value={digit}
                        maxLength={1}
                        keyboardType="number-pad"
                        onChangeText={(text) => handleInputChange(text, index)}
                        ref={(input) => (inputs.current[index] = input)}
                    />
          ))}
        </View>
        <View style={styles.bottomSection}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("DashboardPage")}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
              </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleInput: {
    width: 70,
    height: 60,
    borderRadius: 20,
    borderColor: 'grey',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    marginHorizontal: 5,
    elevation: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  logoText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
    marginLeft:20,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 25,
  },
  subtitle: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
    marginRight: 227,
  },
  verificationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 98,
    left: '5%',
    width: '90%',
  },
  logoText1:{
    marginTop:50,
    fontSize: 44,
    fontWeight: 'bold',
    fontFamily:'', 
    color: '#000',
    marginLeft:20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default VerifyOtpPage;
