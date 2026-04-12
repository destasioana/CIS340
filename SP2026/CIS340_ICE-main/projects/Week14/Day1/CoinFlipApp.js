// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Main App component
export default function App() {
    // Coin image URLs from GitHub
    const images = {
      Heads: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/heads.jpg',
      Tails: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/tails.jpg',
    };
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Fill full screen
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 10,
  },
  coinImage: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  buttonWrapper: {
    marginTop: 10,
    width: 150,
  },
});
