// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
    return (
        
        <View style={{
            flex: 1,        // Make the container take up the full screen
            flexDirection: 'column', // Arranges children vertically (default reaction)
            justifyContent: 'center', // Vertically centers the child views
            alignItems: 'stretch' // Stretches children to fill in the contain's width
        }}
        >
            <View style={{ width: 50, height: 50, backgroundColor: 'red'}} />

            <View style={{ width: 50, height: 50, backgroundColor: 'yellow'}} />

            <View style={{ width: 50, height: 50, backgroundColor: 'green'}} />

        </View>

    );
}
