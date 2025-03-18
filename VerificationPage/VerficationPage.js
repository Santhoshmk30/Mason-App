import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const VerificationPage = () => {
  const navigation = useNavigation();
  const [otpArray, setOtpArray] = useState(['', '', '', '' ,'','']); // Array to store OTP digits
  const inputs = useRef([]); // Ref to store input fields

  const handleInputChange = (text, index) => {
    const newOtpArray = [...otpArray];
    newOtpArray[index] = text; 

    setOtpArray(newOtpArray);

  
    if (text !== '' && index < otpArray.length - 1) {
      inputs.current[index + 1].focus();
    }

    
    if (newOtpArray.every(digit => digit !== '')) {
      navigation.navigate('DashboardPage'); 
    }
  };

  return (
    <ImageBackground
      source={require('../RegisterPage/masonbackground.jpeg')} // Replace with your image path
      style={styles.backgroundImage} // This will fill the screen with the image
    >
      <View style={styles.container}>
        {/* Background Gradient */}
        <View style={styles.backgroundContainer}>
          <View style={styles.backgroundRed} />
          <View style={styles.backgroundGradient} />
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../RegisterPage/masonlogo.png')} // Replace with the logo image path
            style={styles.logo}
          />
          <Text style={styles.logoText}>MASON</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Enter Verification Code</Text>
        

        {/* OTP Input */}
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
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    marginHorizontal: 5,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundRed: {
    position: 'absolute',
    top: height * 0.2,
    width: width,
    height: height * 0.8,
    backgroundColor: '#d91f48',
    borderRadius: 30,
    transform: [{ rotate: '180deg' }],
  },
  backgroundGradient: {
    position: 'absolute',
    top: height * 0.2,
    width: width,
    height: height * 0.8,
    borderRadius: 30,
    backgroundColor: 'rgba(251, 33, 33, 0.8)',
    transform: [{ rotate: '180deg' }],
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 55,
    height: 40,
  },
  logoText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ee0338',
    marginTop: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 100,
    marginLeft: 25,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    marginRight: 227,
  },
  verificationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default VerificationPage;
