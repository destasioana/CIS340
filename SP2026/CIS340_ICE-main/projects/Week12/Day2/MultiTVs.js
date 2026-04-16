// Importing React and the useState hook to manage state
import React, { useState } from 'react';

// Importing components from react-native
import { Text, View, Button } from 'react-native';

function TV(props){

    const[isOff, setIsOff] = useState(true);

    return (

        <View>
            <Text>
                This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"}!
            </Text>

            <Button onPress={() => {
                setIsOff(false); //sets the tv state to "on"
            }}
            disabled={!isOff}
            title={isOff ? "Turn Me On, Please!" : "Thank You!"}/>
        </View>
    );
}

// Main component that renders multiple TVs
export default function MultiTVs() {
    return (
        <View>
            <TV name="LG" />
            <TV name="Sony"/>

        </View>
    );
}
