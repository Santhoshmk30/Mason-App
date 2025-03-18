import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,numColumns,ImageBackground,
} from 'react-native';

const DashboardPage = ({ navigation }) => {
  const sliderImages = [
    'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/400x200/00FF00/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Slide+3',
    'https://via.placeholder.com/400x200/FFFF00/FFFFFF?text=Slide+4',
  ];

  const products = Array.from({ length: 8 }, (_, i) => ({
    id: `${i + 1}`,
    name: 'Ultratech Cement',
    price: '₹350',
    image: 'https://via.placeholder.com/100', 
  }));


  return (
    <ImageBackground
      source={require('./icons/masonbackground.jpeg')}  // Replace with your background image URL
      style={styles.container}
    >
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <View style={styles.imageContainer}>
      <View style={styles.imageContainer1}>
      <TouchableOpacity style={styles.card1}>
      <Image
        source={require('../Dashboard/map.png')}
        style={styles.image}
      />
    </TouchableOpacity>
    <Text style={styles.officeText}>  Office</Text>
    </View>
    <TouchableOpacity style={styles.card}>
      <Image
        source={require('../Dashboard/google-translate.png')}
        style={styles.image}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('CartPage')} style={styles.card}>
      <Image
        source={require('../Dashboard/Cart.png')}
        style={styles.image}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')} style={styles.card}>
      <Image
        source={require('../Dashboard/Person.png')}
        style={styles.image}
      />
    </TouchableOpacity>
    
  </View>
  
    
    <Text style={styles.addressText}>             NO: X, ABC Street, Kodambakkam</Text>
  
</View>


      {/* Image Slider */}
      <View style={styles.sliderContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={sliderImages}
          keyExtractor={(item, index) => `slider-${index}`}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.sliderImage} />
          )}
        />
      </View>


 
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Text>🔍</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.imageRow}>
                <View style={styles.cardContainer1}>
                    <TouchableOpacity onPress={() => navigation.navigate('CementPage')}>
                        <Image
                            source={require('../Dashboard/icons/cement-bag.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Cement</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer1}>
                    <TouchableOpacity onPress={() => navigation.navigate('CallDuty')}>
                        <Image
                            source={require('../Dashboard/icons/firewall.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Bricks</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer1}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyClient')}>
                        <Image
                            source={require('../Dashboard/icons/sand.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Sand</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer1}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddDonor')}>
                        <Image
                            source={require('../Dashboard/icons/earth.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Electronics</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>

      {/* Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Service</Text>
        <View style={styles.imageRow}>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Attendance')}>
                        <Image
                            source={require('../Dashboard/icons/promo-code.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Coupon</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('CallDuty')}>
                        <Image
                            source={require('../Dashboard/icons/lorry.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Rent Vehicles</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyClient')}>
                        <Image
                            source={require('../Dashboard/icons/raw-materials.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Rent Materials</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddDonor')}>
                        <Image
                            source={require('../Dashboard/icons/book.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Dairy</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageRow}>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Attendance')}>
                        <Image
                            source={require('../Dashboard/icons/property.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Real Estate</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('CallDuty')}>
                        <Image
                            source={require('../Dashboard/icons/product.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Resale</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyClient')}>
                        <Image
                            source={require('../Dashboard/icons/raw-materials.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Insurance</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer2}>
                    <TouchableOpacity onPress={() => navigation.navigate('AddDonor')}>
                        <Image
                            source={require('../Dashboard/icons/book.png')}
                            style={styles.image1}
                            resizeMode="cover"
                        />
                        <Text style={styles.imageText}>Others</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>

      {/* Products */}
      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Products</Text>

  {/*Row1*/}
  
  <View style={styles.imageRow}>
  <View style={styles.productCard}>
      {/* Product Image */}
      <Image
        source={require('./icons/Cement.jpg')} // Replace with your image path
        style={styles.productImage}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Ultratech OPC Cement</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹350</Text>
        <Text style={styles.oldPrice}>₹450</Text>
      </View>
      <Text style={styles.rating}>★★★★★</Text>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.productCard}>
      {/* Product Image */}
      <Image
        source={require('./icons/Cement.jpg')} // Replace with your image path
        style={styles.productImage}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Ultratech OPC Cement</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹350</Text>
        <Text style={styles.oldPrice}>₹450</Text>
      </View>
      <Text style={styles.rating}>★★★★★</Text>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
    </View>

    {/*Row 2*/}

    <View style={styles.imageRow}>
  <View style={styles.productCard}>
      {/* Product Image */}
      <Image
        source={require('./icons/Cement.jpg')} // Replace with your image path
        style={styles.productImage}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Ultratech OPC Cement</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹350</Text>
        <Text style={styles.oldPrice}>₹450</Text>
      </View>
      <Text style={styles.rating}>★★★★★</Text>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.productCard}>
      {/* Product Image */}
      <Image
        source={require('./icons/Cement.jpg')} // Replace with your image path
        style={styles.productImage}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Ultratech OPC Cement</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹350</Text>
        <Text style={styles.oldPrice}>₹450</Text>
      </View>
      <Text style={styles.rating}>★★★★★</Text>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
    </View>

    {/*Row 3*/}

    <View style={styles.imageRow}>
  <View style={styles.productCard}>
      {/* Product Image */}
      <Image
        source={require('./icons/Cement.jpg')} // Replace with your image path
        style={styles.productImage}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Ultratech OPC Cement</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹350</Text>
        <Text style={styles.oldPrice}>₹450</Text>
      </View>
      <Text style={styles.rating}>★★★★★</Text>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.productCard}>
      {/* Product Image */}
      <Image
        source={require('./icons/Cement.jpg')} // Replace with your image path
        style={styles.productImage}
      />

      {/* Product Details */}
      <Text style={styles.productName}>Ultratech OPC Cement</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹350</Text>
        <Text style={styles.oldPrice}>₹450</Text>
      </View>
      <Text style={styles.rating}>★★★★★</Text>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
    </View>

    
</View>

    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
  },
  card: {
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
  },
  card1: {
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
  },
  cardContainer1: {
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 9,
    marginBottom: 10,
    padding: 8,
    width: 80,
    height: 83, 
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
},
cardContainer2: {
  backgroundColor: '#fff',
  borderRadius: 20,
  elevation: 9,
  marginBottom: 10,
  padding: 8,
  width: 90,
  height: 90, 
  elevation: 5, 
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
},
cardContainer3: {
  backgroundColor: '#fff',
  borderRadius: 15,
  elevation: 9,
  marginBottom: 10,
  padding: 8,
  width: 190,
  height: 170, 
  elevation: 5, 
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
},
imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
},
image1: {
  width: 40,
  height: 40,
  alignSelf: 'center',
},
imageTextmain: {
  textAlign: 'center', 
  marginTop: 5, 
  fontSize: 16,
  marginBottom: '10%',
  color: '#fff',
},
imageText: {
  textAlign: 'center', 
  marginTop: 5, 
  fontSize: 10,
  marginBottom: '10%',
  fontWeight: 'bold',
  color: '#000000',
},
  imageContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center', 
  },
  imageContainer1: {
    flexDirection: 'row',
    marginRight:160,
    alignItems: 'center', 
  },
  image: {
    width: '70%',
    height: '70%',
  },
  officeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
    color: '#555',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  searchButton: {
    marginLeft: 8,
    backgroundColor: '#f60138',
    padding: 8,
    borderRadius: 8,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryText: {
    marginTop: 4,
    fontSize: 14,
  },
  serviceItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  serviceIcon: {
    fontSize: 24,
  },
  serviceText: {
    marginTop: 4,
    fontSize: 14,
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    justifyContent: 'center',
    alignItems: 'center',
    width:180,
  },
  
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 8, // Optional for rounded image corners
  },
  
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  
  productPrice: {
    color: '#ff5252',
    marginBottom: 8,
  },
  
  addToCartButton: {
    backgroundColor: '#f60138',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  
  addToCartText: {
    color: '#fff',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  paymentLogo: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
  },
  ProductCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    width: 180,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5,
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#f60138',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DashboardPage;
