// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

// An array that contains meal information
const meals = [
  { title: 'Breakfast', color: '#FF6B6B', menu: 'Pancakes, Omelette, Juice' },
  { title: 'Lunch', color: '#4ECDC4', menu: 'Grilled Chicken, Salad, Rice' },
  { title: 'Dinner', color: '#1A535C', menu: 'Pasta, Steak, Vegetables' }
];

// Main component of the app
export default function App() {
}

// Styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                         // Takes up full screen height
    justifyContent: 'center',       // Vertically center items
    alignItems: 'center',           // Horizontally center items
    backgroundColor: '#F7FFF7'      // Light background color
  },
  card: {
    width: 200,
    height: 100,
    justifyContent: 'center',       // Center text vertically
    alignItems: 'center',           // Center text horizontally
    marginVertical: 10,             // Space between cards
    borderRadius: 10,               // Rounded corners
    backfaceVisibility: 'hidden'    // Prevents showing both sides when rotating
  },
  backCard: {
    position: 'absolute',           // Stack behind front card
    top: 0,                         // Align at the top of parent
    backgroundColor: '#333'         // Dark background for back side
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});
