// Import React and React Native components
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

// Import Expo's ImagePicker and Sharing libraries
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {
}

// Style definitions
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Take up the full screen
    alignItems: 'center',        // Center items horizontally
    justifyContent: 'center',    // Center items vertically
    backgroundColor: "#FFFFE0",  // Light yellow background
  },
  logo: {
    width: 310,
    height: 300,
    marginBottom: 20,
  },
  selectedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Keeps image ratio without stretching
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    color: "#87CEFA",           // Light blue text
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#778899", // Steel blue button
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",           // White text
  },
});
