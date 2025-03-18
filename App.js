import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';
import { Image, TouchableOpacity,Text,styles,TextInput } from 'react-native';

import RegisterPage from './RegisterPage/RegisterPage';
import VerificationPage from './VerificationPage/VerficationPage';
import LoginPage from './Loginpage/LoginPage';
import DashboardPage from './Dashboard/DashboardPage';
import CementPage from './Dashboard/Cement Page/CementPage'
import ProductPage from './Dashboard/Product Page/ProductPage';
import CartPage from './Dashboard/Cart Page/CartPage';
import ProfilePage from './Dashboard/ProfilePage/ProfilePage';
import MyAccountKYC from './Dashboard/My Account & KYC/MyAccount&KYC';
import MyOrders from './Dashboard/My Orders/MyOrders';
import Invoice from './Dashboard/ProfilePage/Invoice/Invoice';
import Address from './Dashboard/ProfilePage/Address/Address';
import PaymentsRefunds from './Dashboard/ProfilePage/Payments & Refunds/PaymentsRefunds';
import ReferralList from './Dashboard/ProfilePage/ReferralList/ReferralList';
import IncomeReport from './Dashboard/ProfilePage/IncomeReport/IncomeReport';
import MyRewards from './Dashboard/ProfilePage/MyRewards/MyRewards';
import Membership from './Dashboard/ProfilePage/Membership/Membership';



const Stack = createStackNavigator();

const App = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{ title: 'Register' }} />
        <Stack.Screen name="VerificationPage" component={VerificationPage} options={{ title: 'Verification' }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ title: 'Login' }} />
        <Stack.Screen name="DashboardPage" component={DashboardPage} options={{ title: 'Dashboard' }} />
        <Stack.Screen name="CartPage" component={CartPage} options={{ title: 'My Cart' }} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: 'Profile' }} />
        <Stack.Screen name="MyAccountKYC" component={MyAccountKYC} options={{ title: 'My Account KYC' }} />
        <Stack.Screen name="MyOrders" component={MyOrders} options={{ title: 'My Orders' }} />
        <Stack.Screen name="Invoice" component={Invoice} options={{ title: 'My Orders' }} />
        <Stack.Screen name="Address" component={Address} options={{ title: 'Address' }} />
        <Stack.Screen name="PaymentsRefunds" component={PaymentsRefunds} options={{ title: 'Payments & Refunds' }} />
        <Stack.Screen name="ReferralList" component={ReferralList} options={{ title: 'Referral List' }} />
        <Stack.Screen name="IncomeReport" component={IncomeReport} options={{ title: 'Income Report' }} />
        <Stack.Screen name="MyRewards" component={MyRewards} options={{ title: 'My Rewards' }} />
        <Stack.Screen name="Membership" component={Membership} options={{ title: 'Membership' }} />
        <Stack.Screen
  name="CementPage"
  component={CementPage}
  options={({ navigation }) => ({
    headerTitle: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', // Space between text and buttons
          width: '100%', // Occupy full width
          paddingHorizontal: 10, // Adjust padding as needed
        }}
      >
        {/* Left: Cement Text */}
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cement</Text>

        {/* Right: Buttons */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* Cart Button */}
          <TouchableOpacity
          onPress={() => navigation.navigate('CartPage')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 60,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f60138',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
              marginRight: 10,
            }}
          >
            <Image
              source={require('./Dashboard/Cart.png')}
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </TouchableOpacity>

          {/* Person Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfilePage')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 60,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f60138',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Image
              source={require('./Dashboard/Person.png')}
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    ),
  })}
/>

<Stack.Screen
  name="Product"
  component={ProductPage}
  options={({ navigation }) => ({
    headerTitle: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 10,
        }}
      >
        {/* Search Bar */}
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 8,
              paddingHorizontal: 8,
              height: 40,
            }}
            placeholder="Search"
            placeholderTextColor="#aaa"
          />
        </View>

        {/* Right Buttons */}
        <View style={{ flexDirection: 'row', alignItems: 'center',paddingLeft:20, }}>
          <TouchableOpacity onPress={() => navigation.navigate('CartPage')} style={{width: 35,
    height: 35,
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f60138',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginRight: 10,
}}>
            <Image
              source={require('./Dashboard/Cart.png')}
              style={{width: '70%',
                height: '70%',}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={{width: 35,
    height: 35,
    borderRadius: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f60138',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginRight: 10,
}}>
            <Image
              source={require('./Dashboard/Person.png')}
              style={{width: '70%',
                height: '70%',}}
            />
          </TouchableOpacity>
        </View>
      </View>
     ),
    })}
  />




      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default App;
