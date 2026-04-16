// Importing React and necessary components from react-native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Student(props) {
  return(
    <View style={styles.studentBoxBox}>
      <Text style={styles.studentText}>
      Hey, my name is {props.name}, I am a student in CIS340!
      </Text>
    </View>

  );
}





// The main component exported from this file
export default function MultiComp() {
  return(
      <View style={styles.container}>

        <Text style={styles.titleText}>Welcome to CIS340</Text>

        <Student name="Ramadan Abdunabi"/>
        <Student name="Alice ####"/>
        <Student name="Bob ####"/>
        <Student name="Jon Clark"/>


        
      </View>
  );
}

// Creating styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically centers content
    alignItems: 'center',     // Horizontally centers content
    padding: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentBox: {
    width: '100%',            // Full width of container
    maxWidth: 300,            // Optional: keeps it from being too wide
    marginBottom: 10,
  },
  studentText: {
    fontSize: 16,
    textAlign: 'left',        // Ensures text is left-aligned
  },
});
