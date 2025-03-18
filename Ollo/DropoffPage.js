import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const  DropoffPage = () => {
  const navigation = useNavigation();
  const [dropoffLocation, setDropoffLocation] = useState("");

  const handleSubmit = async () => {
    if (dropoffLocation.trim() === "") return; 

    try {
      await AsyncStorage.setItem("dropoffLocation", dropoffLocation);
      navigation.navigate("DashboardPage");
    } catch (error) {
      console.error("Error saving dropoff location:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Drop-Off Location</Text>

     
      <TextInput
        style={styles.input}
        placeholder="Type dropoff location..."
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />

      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
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

export default DropoffPage;
