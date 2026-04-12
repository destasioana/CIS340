// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Main App component
export default function App() {
}

// Base styles shared across themes
const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Fill the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
});

// Styles specific to light mode
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
  },
});

// Styles specific to dark mode
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
  },
  text: {
    color: '#ffffff',
  },
});
