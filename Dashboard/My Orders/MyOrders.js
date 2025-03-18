import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,ImageBackground } from 'react-native';

const MyOrders = () => {
 
  const orders = [
    {
      id: '12345',
      productName: 'Ultratech OPC Cement',
      price: '₹350',
      date: '4 Nov 2024 4:00pm',
      status: 'Shipped',
      image: require('./Cement.jpg'), 
    },
    {
      id: '12346',
      productName: 'Ultratech OPC Cement',
      price: '₹350',
      date: '4 Nov 2024 4:00pm',
      status: 'Delivered',
      image: require('./Cement.jpg'), 
    },
   
  ];


  const renderItem = ({ item }) => (

    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.orderId}>Order ID: {item.id}</Text>
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <View style={styles.actionContainer}>
          <Text style={[styles.status, item.status === 'Shipped' ? styles.shipped : styles.delivered]}>
            {item.status}
          </Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View Product</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../icons/masonbackground.jpeg')}  
      style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  orderId: {
    fontWeight: 'bold',
  },
  productName: {
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#777',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  shipped: {
    backgroundColor: '#f60138',
    color: '#fff',
  },
  delivered: {
    backgroundColor: '#2ecc71',
    color: '#fff',
  },
  viewButton: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#f60138',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  viewButtonText: {
    fontSize: 14,
    color: 'grey',
  },
});

export default MyOrders;
