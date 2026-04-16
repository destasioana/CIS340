// Importing React and necessary components from react-native
import React from 'react';
import { Text, View, Image } from 'react-native';

// Defining the main functional component called CatApp
export default function CatApp() {
    // Defining an object 'pic' that holds the URI (image URL) for the image we want to display
  let pic = {
    uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/dog2.png'
  };

  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <Image
          source={pic} style={{ width: 200, height: 200}}/>
      

      <Text>Hello, here is my dog!</Text>


    </View>
  );
}
