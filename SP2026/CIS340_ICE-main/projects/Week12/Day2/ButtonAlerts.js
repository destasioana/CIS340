// Import React and required components from react-native
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

// Functional component using modern React
export default function App() {

  return (
    <View style={styles.container}>

        <View style={styles.containerButton}>
          <Button
            title ="Press Button 1"
            onPress={() => Alert.alert('You tapped button 1')}
            />
        </View>


    
        <View style={styles.containerLayoutButton}>
            <Button
                title ="Press Button 2"
                onPress={() => Alert.alert('You tapped button 2')}
            />

            <Button 
              title="Great!"
              color="green"
              onPress={() => Alert.alert('You tapped button Great!')}
            />

        </View>

        <View style={styles.containerButton}>
            <Button
              title="Tap Me!"
              onPress={() => Alert.alert('You tapped button Tap Me!')}
            />

        </View>
      
      </View>


  );
}

// Styling for layout
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills the whole screen
    justifyContent: 'center', // Center vertically
  },
  containerButton: {
    margin: 20, // Spacing around individual buttons
  },
  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Even spacing
  },
});
