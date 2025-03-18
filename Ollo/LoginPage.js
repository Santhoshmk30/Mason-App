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
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  
    const handleSubmit = async () => {
      if (!phone || !/^\d{10}$/.test(phone)) {
        Alert.alert("Error", "Enter a valid 10-digit phone number.");
        return;
      }
  
      try {
        const response = await fetch("https://ollo-laravel.ninositsolution.com/user/generate-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile: phone }),
        });
  
        const text = await response.text(); // Get raw response
        console.log("Raw Response:", text);
  
        const data = JSON.parse(text); // Convert to JSON
  
        if (response.ok) {
          Alert.alert("Success", "OTP sent successfully.");
          await AsyncStorage.setItem("phone", phone);
          navigation.navigate("VerificationPage");
        } else {
          Alert.alert("Error", data.message || "Failed to send OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error sending OTP:", error.message);
        Alert.alert("Error", "Something went wrong. Please try again later.");
      }
    };
  

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
               <View style={styles.logoContainer}>
                <Text style={styles.logoText1}>Ollo</Text>
                <Text style={styles.logoText}>Hi Welcome to OLLO 👋🏻</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>Please Enter Your Mobile Number to Login</Text>
                <View style={styles.inputBox}>
                  <TextInput
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Mobile Number"
                    placeholderTextColor="black"
                    style={styles.textInput}
                    keyboardType="numeric"
                    autoCapitalize="none"
                  />
                  <Image
                  source={require('../Ollo/telephone.png')} 
                  style={styles.logo}
                />
                </View>
              </View>
              <View style={styles.checkboxContainer}>
      <CheckBox
        value={isChecked}
        onValueChange={setIsChecked}
        tintColors={{ true: '#E64A35', false: '#ccc' }} // Customize the checkbox colors
        style={styles.checkbox}
      />
      <Text style={styles.checkboxLabel}>
      By Login you are aggreeing to our Terms & Conditions and Privacy Policy
      </Text>
    </View>

              

              <View style={styles.bottomSection}>
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
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
    top: 177,
    left: '5%',
    width: '90%',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 15,
    marginTop:30,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    height: 60,
    borderRadius: 20,
  },
  inputBox1: {
    padding: 10,
    marginTop: 140,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: 'black',
    marginHorizontal: 8,
  },
  countryCode: {
    color: 'black',
    marginRight: 8,
  },
  phoneNumber: {
    color: 'black',
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
    marginTop: 250,
    marginLeft:20,
  },
  checkboxLabel: {
    marginTop:12,
    color: 'Black',
    marginLeft: 1,
    fontSize:15,
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
  logoContainer: {
    top: 67,
    marginLeft:20,
  },
  logo: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginLeft:250,
  },
    logoText1: {
      fontSize: 44,
      fontWeight: 'bold',
      fontFamily:'', 
      color: '#000',
    },

  
  logoText: {
    color: 'black',
    fontSize: 25,
    marginRight:120,
    marginTop:10,
  },
  loginLink:{
    color: 'black',
    marginLeft: 58,
    marginTop:20,
    textDecorationLine: 'underline'
  },
});

export default LoginPage;
