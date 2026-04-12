// Importing React and required components from react-native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Functional component named MyApp that accepts a prop 'studentName'
function MyApp({ studentName }) {
  return(
    <View style={styles.card}>
        <Text style={styles.text}>
        Hello, I'm student {studentName}!
        </Text>
    
    </View>
  );
}

// Main component that renders multiple students
export default function MultiComp() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to My Class, CIS340!
      </Text>

      <MyApp studentName="Ana"/>
      <MyApp studentName="Alice"/>
      <MyApp studentName="Bob"/>
      <MyApp studentName="John"/>


    </View>
  );
}

// Defining styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
    padding: 20, // Adds padding for better spacing
    backgroundColor: '#F8F9FA', // Light background color
  },
  title: {
    fontSize: 22, // Makes title larger
    fontWeight: 'bold', // Makes title bold
    marginBottom: 20, // Adds spacing below title
  },
  card: {
    backgroundColor: 'white', // Card-like container
    padding: 15,
    margin: 10,
    borderRadius: 10, // Rounded corners
    elevation: 3, // Adds shadow (Android)
    shadowColor: '#000', // Adds shadow (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
