// Importing React and the View component from react-native
import React from 'react';
import { View } from 'react-native';

// Main functional component named App
export default function App() {
    return (
        <View style={{
            flex: 1,        // makes the container take up the
            flexDirection: 'column', // stacks child views vertically
            justifyContent: 'space-evenly' // evenly spaces children
        }}>

                        <View style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'red'
                        }}/>
            
                        <View style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'yellow'
                        }}/>
            
                        <View style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'green'
                        }}/>
            
        </View>
    );
}
