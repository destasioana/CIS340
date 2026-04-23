// Import React and React Native components
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

// Main App component
export default function App() {
    // Coin image URLs from GitHub
    const images = {
      Heads: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/heads.jpg',
      Tails: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/images/tails.jpg',
    };



    const [coinResult, setCoinResult] = useState(null);

    const [countdown, setCountDown] = useState(null);
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    // Function to start the countdown and flip the count
    function flipCoinWithCountdown() {

      let counter = 3;

      setCountDown(counter);
      setIsButtonDisabled(true);

        // Start a repeating interval every 500 milliseconds
        const countdownInterval = setInterval(() => {

          counter = counter - 1;
          setCountDown(counter);

          if (counter == 0) { 
            clearInterval(countdownInterval); 
            const result = Math.random() > 0.5 ? 'Heads' : 'Tails';

            setCoinResult(result);
            setCountDown(null);
            setIsButtonDisabled(false);
          }
        }, 500);
        
    }

    return (

      <View style={styles.container}>
        
        {countdown === null && (
          <Text style={[styles.resultText, { color: coinResult === 'Heads' ? '#007AFF' : '#FF9500'}]}>
          {coinResult}
          </Text>
        )}

        {countdown !== null ? ( 
          <Text style={styles.countdownText}>{countdown}</Text>
        ) : (
          <Image source={{ url: images[coinResult ] }}
           style={styles.coinImage}
           />
        )}

        <View style={styles.buttonWrapper}>
          <Button 
          title='Flip Coin'
          onPress={flipCoinWithCountdown}
          disabled={isButtonDisabled}
          />
        </View>


      </View>

    );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // Fill full screen
    justifyContent: 'center',  // Center vertically
    alignItems: 'center',      // Center horizontally
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  resultText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff3b30',
    marginBottom: 10,
  },
  coinImage: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },
  buttonWrapper: {
    marginTop: 10,
    width: 150,
  },
});
