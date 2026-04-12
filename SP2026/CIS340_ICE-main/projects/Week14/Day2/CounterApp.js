// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Main component of the Counter App
export default function CounterApp() {
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // Take up full screen
    justifyContent: 'center',     // Center vertically
    alignItems: 'center',         // Center horizontally
    backgroundColor: '#f0f0f0',   // Light gray background
    padding: 20,
  },
  text: {
    fontSize: 28,                 // Large text size
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonGroup: {
    width: '60%',                 // Take up 60% of screen width
  },
  buttonSpacing: {
    marginVertical: 10,          // Space between buttons
  },
});
