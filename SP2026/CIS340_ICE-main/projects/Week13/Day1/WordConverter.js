// Importing necessary modules from React and React Native
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

// Functional component named WordConvertor
export default function WordConvertor() {
  const [text, setText] = useState('');

  return(
    <View style={styles.container}>
        <Text style={styles.label}>Enter some text:</Text>
        <TextInput
        style={styles.input}
        placeholder="Type something here.."
        onChangeText={(text) => setText(text)} // Updates state
        value={text}
        />

        <Text style={styles.output}>
          {
            text
            .trim()
            .split(' ')
            .map((word) => word ? '*' : '') // Filters out emplty strings
            .join(' ')
          }

        </Text>

    </View>

  );
}

// Styling using StyleSheet for clean, reusable styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  output: {
    fontSize: 42,
    paddingTop: 10,
  },
});
