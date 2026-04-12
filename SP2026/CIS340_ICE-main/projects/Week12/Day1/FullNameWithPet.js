// Import React and necessary components from React Native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Function to concatenate full name (moved outside for better organization)
function getFullName(fname, mName, lName) {
  return `${fname} ${mName} ${lName}`; // Using template literals for cleaner syntax
}

// Functional component named MyApp
export default function MyApp({ pet = "Dog" }) {
  return (
    <View style={styles.container}>

        <Text style={styles.text}>Hello I am a student in CIS340!</Text>

        <Text style={styles.text}>
          My full name is {getFullName("Ana", "Elizabeth", "Destasio")}
        </Text>

        <Text style={styles.text}>
          I have a {pet}!
        </Text>

    </View>
  );



}

// Defining styles using StyleSheet for cleaner styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    padding: 20, // Adds spacing
    backgroundColor: '#F8F9FA', // Light background color
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10, // Adds spacing between text elements
  },
});
