import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const ReferralList = () => {
  const referralData = [
    { name: 'test', phone: '+91 1234567890', id: 'ID-MS12345436', date: '4 Nov 2024 4:00pm', status: 'Pending', image: 'https://via.placeholder.com/50' },
    { name: 'test', phone: '+91 1234567890', id: 'ID-MS12345436', date: '4 Nov 2024 4:00pm', status: 'Approved', image: 'https://via.placeholder.com/50' },
    { name: 'test', phone: '+91 1234567890', id: 'ID-MS12345436', date: '4 Nov 2024 4:00pm', status: 'Pending', image: 'https://via.placeholder.com/50' },
    { name: 'test', phone: '+91 1234567890', id: 'ID-MS12345436', date: '4 Nov 2024 4:00pm', status: 'Pending', image: 'https://via.placeholder.com/50' },
    { name: 'test', phone: '+91 1234567890', id: 'ID-MS12345436', date: '4 Nov 2024 4:00pm', status: 'Approved', image: 'https://via.placeholder.com/50' },
  ];

  const renderReferralItem = ({ item }) => (
    
    <View style={styles.referralItem}>
      <Image source={{ uri: item.image }} style={styles.referralImage} />
      <View style={styles.referralDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.row}>
  <Text>₹100</Text>
  <Text style={styles.text}>Referral Income</Text>
</View>

    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.stats}>
  <View style={[styles.statBox, styles.card]}>
    <Text style={styles.statNumber}>30</Text>
    <Text style={styles.statLabel}>Total Referral</Text>
  </View>
  <View style={[styles.statBox, styles.card]}>
    <Text style={styles.statNumber}>30</Text>
    <Text style={styles.statLabel}>Today Referral</Text>
  </View>
  <View style={[styles.statBox, styles.card]}>
    <Text style={styles.statNumber}>30</Text>
    <Text style={styles.statLabel}>Active Referral</Text>
  </View>
</View>


      <Text style={styles.sectionTitle}>New Referral</Text>

      <FlatList
        data={referralData}
        renderItem={renderReferralItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity>
        <Text style={styles.seeMore}>See More...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  backButton: { fontSize: 16, color: '#000' },
  title: { fontSize: 18, fontWeight: 'bold' },
  searchButton: { fontSize: 16, color: '#000' },
  inviteSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  inviteLink: { flex: 1, borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 8, marginRight: 8 },
  button: { 
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 98,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Adds shadow for Android
    marginHorizontal: 4, // Adds spacing
    alignItems: 'center',
    justifyContent: 'center', // Centers the image
    width: 40, // Adjust width for the button
    height: 40, // Adjust height for the button
  },
  image: {
    width: 18,
    height: 20,
    resizeMode: 'contain', 
  },
  
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Adds shadow for Android
    marginHorizontal: 4, // Adds spacing between cards
    alignItems: 'center',
    width: '30%', // Each card takes 30% of the width
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statBox: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold' },
  statLabel: { fontSize: 10, color: '#555' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  referralItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 8 },
  referralImage: { width: 50, height: 50, borderRadius: 25, marginRight: 16 },
  referralDetails: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  phone: { fontSize: 14, color: '#555' },
  id: { fontSize: 14, color: '#555' },
  date: { fontSize: 12, color: '#999' },
  status: { fontSize: 14, fontWeight: 'bold' },
  approved: { color: 'green' },
  pending: { color: 'red' },
  seeMore: { textAlign: 'center', color: '#f04', marginTop: 16 },
});

export default ReferralList;
