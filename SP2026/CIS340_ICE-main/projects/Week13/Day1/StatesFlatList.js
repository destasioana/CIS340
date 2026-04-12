// Import React and React Native components
import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

// Create a constant array of state names to display in the list
const US_STATES = [
  { key: 'Alabama' },
  { key: 'Alaska' },
  { key: 'Arizona' },
  { key: 'Arkansas' },
  { key: 'California' },
  { key: 'Colorado' },
  { key: 'Delaware' },
  { key: 'Florida' },
  { key: 'Georgia' },
  { key: 'Hawaii' },
  { key: 'Idaho' },
  { key: 'Illinois' },
  { key: 'Indiana' },
  { key: 'Iowa' },
  { key: 'Kansas' },
  { key: 'Kentucky' },
  { key: 'Maine' },
  { key: 'Maryland' },
  { key: 'Massachusetts' },
  { key: 'Michigan' },
  { key: 'Minnesota' },
  { key: 'Mississippi' },
];

// Define the functional component
export default function StatesApp() {
}

// Create styles using StyleSheet (cleaner than inline styles)
const styles = StyleSheet.create({
  container: {
    flex: 1,          // Use full screen height
    paddingTop: 22,   // Add space at the top
    backgroundColor: '#F0F8FF', // Optional: soft background color
  },
  itemText: {
    padding: 10,      // Space around each item
    fontSize: 20,     // Larger text
    height: 44,       // Fixed height for consistency
    color: '#333333', // Dark grey for good contrast
  }
});
