import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

const MyAccountKYC = () => {
  return (
    <ImageBackground
      source={require('../icons/masonbackground.jpeg')}  // Replace with your background image URL
      style={styles.container}
    >
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Test</Text>
          <Text style={styles.userInfo}>+91 1234567890</Text>
          <Text style={styles.userInfo}>ID-MS1243332</Text>
        </View>
        <Avatar.Image
          size={80}
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <Button
          icon="plus-circle"
          color="#fff"
          style={styles.editButton}
          onPress={() => {}}
        />
      </View>

      {/* Email Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>

      {/* Bank Details Section */}
      <Text style={styles.sectionTitle}>Bank Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Account Holder Name" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Account Number</Text>
        <TextInput style={styles.input} placeholder="Account Number" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bank Name</Text>
        <TextInput style={styles.input} placeholder="Enter Bank Name" />
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>IFSC</Text>
          <TextInput style={styles.input} placeholder="IFSC Code" />
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Branch</Text>
          <TextInput style={styles.input} placeholder="Branch" />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PAN Number</Text>
        <TextInput style={styles.input} placeholder="PAN Number" />
      </View>
      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Sponsor Name</Text>
          <TextInput style={styles.input} placeholder="Sponsor Name" />
        </View>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Sponsor ID</Text>
          <TextInput style={styles.input} placeholder="Sponsor ID" />
        </View>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: '#d32f2f',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  userInfo: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  avatar: {
    marginLeft: 10,
  },
  editButton: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
});

export default MyAccountKYC;
