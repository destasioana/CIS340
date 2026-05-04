// Import React and necessary hooks from the React library
import React, { useState, useEffect } from "react";

// Import React Native components used in the app
import {
  Text,
  View,
  SectionList,
  ActivityIndicator,
  Alert,
} from "react-native";

// Main functional component
export default function StatesApp() {
  const githubUrl =
    "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340-Images/main/Cities.txt";


    const [sections, setSections] = useState([]);

    const [loading, setLoading] = useState(true);

    // Runs data fetching code only once
    useEffect(() => {

      fetch(githubUrl)
      .then((response) => {
        // if the request failed, throw an error
        if (!response.ok) { 
          throw new Error("Failed to fetch file");
        }
        // Return the text content of the response
        return response.text();
      })
      .then((text) => { 
        let cities = text
          .split("\n") // Creates an array of city strings
          .map((c) => c.trim()) // Removes any extra spaces from each name
          .filter((c) => c !== "") // Removes any empty lines
          .sort();

        let groups = {};
        cities.forEach((city) => { 
          let letter = city[0].toUpperCase(); // Get the first letter
          if (!groups[letter]) { 
            groups[letter] = []; // Create a new group it doesnt exist
          }
          groups[letter].push(city) // Add city to its letter group
        });
        
        let formatted = Object.keys(groups)
          .sort() // sort the group headers alphabetically (A-Z)
          .map((letter) => ({
            title: letter, // the section title
            data: groups[letter], // array of cities under that letter
          }));

        // Save the final group data into state
        setSections(formatted);
      })
      .catch((error) => {
        // If anything goes wrong, log the error and show an alert
        console.error(error);
        Alert.alert("Error", "Could not fetch the file.");
      })
      .finally(() => {
        // Hide the loading spinner
        setLoading(false);
      });
    }, []);

    return (
      <View style={{ flex: 1, paddingTop: 22, paddingHorizontal: 10}}>
        <SectionList 

          sections={sections}
          
          keyExtractor={( item, index) => index.toString()}

          renderItem={({ item }) => (
            <Text style={{ padding:10, fontSize: 20}}>{item}</Text>
          )}

          renderSectionHeader={({ section}) => {
            <Text
              style={{
                padding: 5,
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#9FA8DF",
                color: "white",
              }}
              >
                {section.title}
              </Text>
          }}
          />
      </View>
      );
    }

