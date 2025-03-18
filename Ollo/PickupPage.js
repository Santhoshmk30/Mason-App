import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const PickupPage = () => {
  const navigation = useNavigation();
  const [pickupLocation, setPickupLocation] = useState("");

  const handleSubmit = async () => {
    if (pickupLocation.trim() === "") return; 

    try {
      await AsyncStorage.setItem("pickupLocation", pickupLocation);
      navigation.navigate("DashboardPage"); 
    } catch (error) {
      console.error("Error saving pickup location:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Pickup Location</Text>

      {/* Input Box */}
      <TextInput
        style={styles.input}
        placeholder="Type pickup location..."
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  button: { backgroundColor: "black", padding: 12, borderRadius: 8 },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default PickupPage;
