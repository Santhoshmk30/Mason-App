import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width } = Dimensions.get("window");

const BookNow = () => {
  const [pickup, setPickup] = useState("My current location");
  const [dropOff, setDropOff] = useState("");
  const [isScheduled, setIsScheduled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const loadPickupLocation = async () => {
      try {
        const savedLocation = await AsyncStorage.getItem("pickupLocation");
        if (savedLocation) {
          setPickup(savedLocation);
        }
      } catch (error) {
        console.error("Error loading pickup location:", error);
      }
    };

    const unsubscribe = navigation.addListener("focus", loadPickupLocation);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const loadDropOffLocation = async () => {
      try {
        const savedLocation = await AsyncStorage.getItem("dropoffLocation");
        if (savedLocation) {
          setDropOff(savedLocation);
        }
      } catch (error) {
        console.error("Error loading drop-off location:", error);
      }
    };

    const unsubscribe = navigation.addListener("focus", loadDropOffLocation);
    return unsubscribe;
  }, [navigation]);

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  if (Platform.OS === 'ios') {
    DateTimePicker.dismiss();
}
const handleConfirm = (selectedDate) => {
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); 
    const year = selectedDate.getFullYear();
  
    const formattedDate = `${day}-${month}-${year}`;
    setDate(formattedDate);
    setDatePickerVisibility(false);
    
    fetchFilteredData(searchText, formattedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Enter your destination</Text>

       
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={isScheduled ? styles.toggleButton : styles.toggleButtonActive}
            onPress={() => setIsScheduled(false)}
          >
            <Text style={isScheduled ? styles.toggleText : styles.toggleTextActive}>Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={!isScheduled ? styles.toggleButton : styles.toggleButtonActive}
            onPress={() => setIsScheduled(true)}
          >
            <Text style={!isScheduled ? styles.toggleText : styles.toggleTextActive}>Schedule</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("PickupPage")}>
          <Text style={styles.label}>PICKUP</Text>
          <View style={styles.input}>
            <Text>{pickup}</Text>
          </View>
        </TouchableOpacity>

       
        <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.navigate("DropoffPage")}>
          <Text style={styles.label}>DROP-OFF</Text>
          <View style={styles.input}>
            <Text>{dropOff}</Text>
          </View>
        </TouchableOpacity>

   
        {isScheduled && (
          <TouchableOpacity style={styles.dateContainer} onPress={() => setShowPicker(true)}>
            <Text style={styles.label}>Schedule a Ride</Text>
            <Text style={styles.dateText}>{date.toLocaleString()}</Text>
          </TouchableOpacity>
        )}

    
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onConfirm={handleConfirm}
            onChange={onDateChange}
          />
        )}

       
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    padding: 15,
    borderRadius: 15,
  },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  toggleContainer: { flexDirection: "row", marginBottom: 10 },
  toggleButton: { flex: 1, padding: 8, alignItems: "center" },
  toggleButtonActive: {
    flex: 1,
    backgroundColor: "black",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
  },
  toggleText: { color: "black", fontWeight: "bold" },
  toggleTextActive: { color: "white", fontWeight: "bold" },
  inputContainer: { marginBottom: 10 },
  label: { fontSize: 12, fontWeight: "bold", color: "gray", marginBottom: 5 },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
  dateContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  dateText: { fontSize: 14, fontWeight: "bold" },
  confirmButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmText: { color: "white", fontWeight: "bold" },
});

export default BookNow;
