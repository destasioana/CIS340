// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Defining a functional component named MyApp
export default function MyApp() {
  const pet = "Dog";
  
  return(
      <View style = {styles.container}>

          <Text style={styles.text}>
            Hello, I am a student in CIS340!
          </Text>

          <Text style={styles.text}>
            I have a {pet}!
          </Text>

      </View>
  );
}

// Creating a StyleSheet object to define and reuse styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the View take up the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',     // Centers content horizontally
    padding: 16, // Adds space around the content inside the container
  },
  text: {
    fontSize: 18, // Sets the font size of the text
    marginBottom: 10, // Adds space below each Text component
  },
});
