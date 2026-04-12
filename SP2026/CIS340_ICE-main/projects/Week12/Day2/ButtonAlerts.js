// Import React and required components from react-native
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

// Functional component using modern React
export default function App() {

}

// Styling for layout
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills the whole screen
    justifyContent: 'center', // Center vertically
  },
  containerButton: {
    margin: 20, // Spacing around individual buttons
  },
  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Even spacing
  },
});
