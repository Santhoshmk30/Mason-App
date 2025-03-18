import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Address= () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Enter Your Location</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Site Address */}
        <View style={styles.inputWrapper}>
          <Icon name="location-on" size={20} color="#d9534f" />
          <TextInput
            placeholder="Site Address"
            style={styles.textInput}
            placeholderTextColor="#888"
          />
          <TouchableOpacity>
            <Icon name="mic" size={20} color="#d9534f" />
          </TouchableOpacity>
        </View>

        {/* Search Address */}
        <View style={styles.inputWrapper}>
          <Icon name="search" size={20} color="#d9534f" />
          <TextInput
            placeholder="NO:X ABC Street,Kodambakkam"
            style={styles.textInput}
            placeholderTextColor="#888"
          />
          <TouchableOpacity>
            <Icon name="gps-fixed" size={20} color="#d9534f" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Result Section */}
      <View style={styles.resultSection}>
        <Text style={styles.resultTitle}>Your Result</Text>
        <View style={styles.resultItem}>
          <Icon name="near-me" size={20} color="#d9534f" />
          <View style={styles.resultText}>
            <Text style={styles.resultLabel}>Office</Text>
            <Text style={styles.resultAddress}>NO:X ABC Street,Kodambakkam</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
  resultSection: {
    marginTop: 20,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
  },
  resultText: {
    marginLeft: 10,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  resultAddress: {
    fontSize: 14,
    color: '#555',
  },
});

export default Address;
