import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView,ImageBackground, } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfilePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../icons/masonbackground.jpeg')}  
      style={styles.container}
    >
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar.Image size={80} source={{ uri: 'https://via.placeholder.com/150' }} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Test</Text>
          <Text style={styles.userDetails}>+91 1234567890</Text>
          <Text style={styles.userDetails}>ID-2313423</Text>
        </View>
      </View>

      {/* Premium and Edit Buttons */}
      <View style={styles.buttonRow}>
        <Button mode="contained" style={styles.premiumButton}>
          <Text style={styles.premiumButtonText}>You Are A Premium Member</Text>
        </Button>
        <Button mode="outlined" style={styles.editProfileButton}>
          <Text style={styles.premiumButtonText}>Edit Profile</Text>
        </Button>
      </View>

      {/* Invite Link Section */}
      <View style={styles.inviteSection}>
        <Text style={styles.inviteText}>Invite Link</Text>
        <View style={styles.inviteInputContainer}>
          <TextInput
            style={styles.inviteInput}
            placeholder="Invite Link"
            editable={false}
          />
          <Icon name="content-copy" size={24} color="#000" style={styles.copyIcon} />
        </View>
      </View>

      {/* Earnings Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Earnings</Text>
        <Text style={styles.cardAmount}>₹500.00</Text>
        <Text style={styles.cardDetails}>Today Earnings - ₹100.00</Text>
      </View>

      {/* Wallet Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mason Wallet</Text>
        <Text style={styles.cardAmount}>₹1000.00</Text>
        <Text style={styles.cardDetails}>
          Used Amount - ₹100.00 | Total Wallet - ₹1000.00
        </Text>
      </View>

      {/* Icon Buttons Row */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="cash" size={30} color="#f44336" />
          <Text style={styles.iconText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="ticket-percent" size={30} color="#4caf50" />
          <Text style={styles.iconText}>Coupon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="bank-transfer" size={30} color="#2196f3" />
          <Text style={styles.iconText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="share" size={30} color="#ff9800" />
          <Text style={styles.iconText}>Referral Link</Text>
        </TouchableOpacity>
      </View>

      {/* Links Section */}
      <TouchableOpacity onPress={() => navigation.navigate('Membership')} style={styles.linkButton}>
        <Text style={styles.linkText}>Membership</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Membership')} style={styles.linkButton}>
        <Text style={styles.linkText}>My Coupons</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyAccountKYC')} style={styles.linkButton}>
        <Text style={styles.linkText}>My Account & KYC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyOrders')} style={styles.linkButton}>
        <Text style={styles.linkText}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Invoice')} style={styles.linkButton}>
        <Text style={styles.linkText}>Invoice</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Address')}  style={styles.linkButton}>
        <Text style={styles.linkText}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PaymentsRefunds')} style={styles.linkButton}>
        <Text style={styles.linkText}>Payments & Refunds</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ReferralList')} style={styles.linkButton}>
        <Text style={styles.linkText}>Refferal List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyRewards')} style={styles.linkButton}>
        <Text style={styles.linkText}>My Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('IncomeReport')} style={styles.linkButton}>
        <Text style={styles.linkText}>Income Report</Text>
      </TouchableOpacity>
      
      <View style={styles.spacer}>
               
            </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    marginLeft: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userDetails: {
    fontSize: 14,
    color: '#666',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  premiumButton: {
    backgroundColor: '#f60138',
    flex: 1,
    marginRight: 10,
  },
  premiumButtonText: {
    color:'#fff',
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: '#f60138',
  },
  editProfileButtonText: {
    Color: '#fff',
  },
  inviteSection: {
    marginBottom: 20,
  },
  inviteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  inviteInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inviteInput: {
    flex: 1,
  },
  copyIcon: {
    marginLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f44336',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: '#666',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconButton: {
    alignItems: 'center',
    width: '22%',
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  linkButton: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  spacer: {
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginTop: 20,
},
});

export default ProfilePage;
