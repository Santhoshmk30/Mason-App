import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const validatePhone = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };
  const handleSubmit = () => {
    if (!validatePhone()) {
      Alert.alert('Invalid Input', 'Please enter a valid mobile number.');
      return;
    }
    navigation.navigate('VerificationPage'); 
  };

  return (
    <ImageBackground
      source={require('../RegisterPage/masonbackground.jpeg')}
      style={styles.backgroundImage}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
              {/* Gradient Box */}
              <LinearGradient
                colors={['#FC2121', '#982B2B']}
                style={styles.gradientBox}
              />
              {/* Content */}
              <View style={styles.content}>
                <Text style={styles.title}>Enter Your Number</Text>
                <View style={styles.inputBox}>
                  <Text style={styles.countryCode}>+91</Text>
                  <View style={styles.divider} />
                  <TextInput
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Mobile Number"
                    placeholderTextColor="white"
                    style={styles.textInput}
                    keyboardType="numeric"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              

              <View style={styles.bottomSection}>
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
              </View>

              {/* Logo Container */}
              <View style={styles.logoContainer}>
                <Image
                  source={require('../RegisterPage/masonlogo.png')} // Ensure the path is correct
                  style={styles.logo}
                />
                <Text style={styles.logoText}>MASON</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'relative',
  },
  gradientBox: {
    position: 'absolute',
    top: 170,
    left: 0,
    width: '100%',
    height: 704,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: 207,
    left: '5%',
    width: '90%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  inputBox1: {
    padding: 10,
    marginTop: 140,
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: 'white',
    marginHorizontal: 8,
  },
  countryCode: {
    color: 'white',
    marginRight: 8,
  },
  phoneNumber: {
    color: 'white',
  },
  bottomSection: {
    position: 'absolute',
    bottom: 98,
    left: '5%',
    width: '90%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 90,
  },
  checkboxLabel: {
    color: 'white',
    marginLeft: 8,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f60138',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 67,
    left: '50%',
    transform: [{ translateX: -27.5 }],
    alignItems: 'center',
  },
  logo: {
    width: 55,
    height: 40,
    marginBottom: 5,
  },
  logoText: {
    color: '#ee0338',
    fontSize: 12,
  },
  loginLink:{
    color: 'white',
    marginLeft: 58,
    marginTop:20,
    textDecorationLine: 'underline'
  },
});

export default LoginPage;
