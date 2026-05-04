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
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  function calculateBMI() {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100;

      const calculateBMI = weightInKg / (heightInMeters * heightInMeters); // BMI formula
      const roundedBMI = calculateBMI.toFixed(2);

      setBmiResult(roundedBMI); // Save BMI result to state
      determineCategory(roundedBMI);
    }

  };

  function determineCategory(bmiValue) {

    const bmi = parseFloat(bmiValue);

    if (bmi < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) { 
      setBmiCategory('Overweight');
    } else { 
      setBmiCategory('Obese');
    }


  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>BMI Calculator</Text>

          <TextInput 
            style={styles.input}
            placeholder="Enter your weight (kg)"
            keyboardType='numeric'
            onChangeText={(value) => setWeight(value)}
            value={weight}
          />

          <TextInput 
            style={styles.input}
            placeholder="Enter your height (cm)"
            keyboardType='numeric'
            onChangeText={(value) => setHeight(value)}
            value={height}
          />


          <View style={styles.buttonWrapper}>
            <Button title="Calculate BMI" onPress={calculateBMI} />
          </View>


          {bmiResult && (
            <View style={styles.resultBox}>
              <Text style={styles.bmiText}>You BMI: {bmiResult}</Text>
              <Text style={styles.categoryText}>Category: {bmiCategory}</Text>
            </View>  
          )}

      </ScrollView>
    </TouchableWithoutFeedback>
  );

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
