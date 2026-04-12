// Importing necessary modules from React and React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

// Main app component
export default function App() {
}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 5,
  },
  buttonWrapper: {
    marginTop: 10,
    width: 200,
  },
  resultBox: {
    marginTop: 30,
    alignItems: 'center',
  },
  bmiText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 20,
    color: 'blue',
    marginTop: 10,
  },
});
