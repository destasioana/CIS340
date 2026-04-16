// Importing React and View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
    return(
        // Outer container View with flex: 1 to take up the full screen
        <View style={{flex: 1}}>
            
            { /* First inner View takes up 1/3 of the screen and has a red background */}
            <View style={{flex: 1, backgroundColor: 'red'}} />

            { /* Second inner View takes up 1/3 of the screen and has a red background */}
            <View style={{flex: 1, backgroundColor: 'yellow'}} />

            { /* Third inner View takes up 1/3 of the screen and has a red background */}
            <View style={{flex: 1, backgroundColor: 'blue'}} />
        </View>
    );
}
