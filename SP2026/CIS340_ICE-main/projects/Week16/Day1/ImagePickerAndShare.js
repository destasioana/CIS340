// Import React and React Native components
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

// Import Expo's ImagePicker and Sharing libraries
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function App() {

  const img = { uri: 'https://raw.githubusercontent.com/AnathIyerKrishnan/CIS340/master/images/logo.png'};

  const [selectedImage, setSelectedImage] = useState(null);

  //function to open the image library
  async function openImagePicker() { 
    
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(!permissionResult.granted){
      Alert.alert("Permission required", "You need to allow permission to select image.")
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(pickerResult.canceled) { 
      return;
    }

    let imageUri = pickerResult.assets[0].uri;
    setSelectedImage({localUri: imageUri});
  }

  async function shareImage (){
    
    if(!selectedImage){
      Alert.alert("No Image", "Please pick an image first");
      return;
    }

    let canShare = await Sharing.isAvailableAsync();

    if(!canShare) { 
      Alert.alert("Sharing not supported", "Sharing is not allowed on this device");
      return;
    }
    
    await Sharing.shareAsync(selectedImage.localUri);

  }
  //main screen ui 
  return (
    <View style={styles.container}>

      {selectedImage ? (
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: selectedImage.localUri}} style={styles.selectedImage}/>
          <TouchableOpacity onPress={shareImage} style={styles.button}>
            <Text style={styles.buttonText}>Share this Photo</Text>
          </TouchableOpacity>
        </View>
      ) : ( // If no image is selected
        <View style={{alignItems: 'center'}}>
          <Image 
          source={img}
          style={styles.logo}
          />
          <Text style={styles.instructions}>
            Press the button to select an image from your phone!
          </Text>

          <TouchableOpacity onPress={openImagePicker} style={styles.button}>
            <Text style={styles.buttonText}>Pick Image</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

// Style definitions
const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Take up the full screen
    alignItems: 'center',        // Center items horizontally
    justifyContent: 'center',    // Center items vertically
    backgroundColor: "#FFFFE0",  // Light yellow background
  },
  logo: {
    width: 310,
    height: 300,
    marginBottom: 20,
  },
  selectedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain', // Keeps image ratio without stretching
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    color: "#87CEFA",           // Light blue text
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#778899", // Steel blue button
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",           // White text
  },
});
