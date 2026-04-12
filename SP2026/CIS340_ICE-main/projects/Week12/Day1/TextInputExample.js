// Import React and hooks from 'react'
import React, { useState } from 'react';

// Import necessary components from react-native
import { Text, TextInput, View, StyleSheet } from 'react-native';

// Functional component named MyApp
export default function MyApp() {
  const [name, setName] = useState('');
  return ( 
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello, I am a student in CIS340!
      </Text>

      <TextInput style={styles.input}
      placeholder="Type Here.."
      onChangeText={setText} // updates state when user types
      value={text}/>

      <Text style={styles.displayText}>
        You typed: {text}
      </Text>
    

    </View>
  );
}

// Defining styles using StyleSheet for better readability and reusability
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full screen height
    justifyContent: 'center', // Centers items vertically
    alignItems: 'center', // Centers items horizontally
    padding: 20, // Adds spacing
  },
  heading: {
    fontSize: 18, // Makes text larger
    fontWeight: 'bold', // Makes text bold
    marginBottom: 10, // Adds spacing below text
  },
  input: {
    height: 40,
    width: '80%', // Makes input box responsive
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10, // Adds padding inside input
    borderRadius: 5, // Rounds corners
    marginBottom: 10, // Adds spacing below input
  },
  displayText: {
    fontSize: 16, // Slightly larger text
    color: 'blue', // Different color for better visibility
  },
});
