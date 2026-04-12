// Importing React and core components from React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Main component of the app
export default function App() {
}

// Creating a StyleSheet for reusable and clean styling
const styles = StyleSheet.create({

  // Main container with top margin and centered alignment
  container: {
    marginTop: 60,
    alignItems: 'center', // Center text horizontally
  },

  // Style for large green bold text
  largeGreenText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
  },

  // Style for smaller blue text
  blueText: {
    color: 'blue',
    fontSize: 20,
  },
});
