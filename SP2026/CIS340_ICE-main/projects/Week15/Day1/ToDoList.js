// Import necessary components from React and React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

// Main App component
export default function App() {
}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,              // Take up full screen height
    padding: 20,          // Padding inside the screen
    backgroundColor: '#fff'
  },
  input: {
    borderBottomWidth: 1, // Line under the input
    borderColor: '#999',
    padding: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',         // Arrange text and button side-by-side
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
    flex: 1,
  },
});
