import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

// Keep imports for teaching/demo purposes
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";  

// Define the main component for the weather forecast
class WeatherForecast extends Component {

  // Constructor method to initalize state
  constructor(props) { 
    super(props);
    // Initial state: zip code is empty, no forecast yet
    this.state = { zip: "", forecast: null };
  }

  // Function to handle when the user submits a zip code in the TextInput
  _hndleTextChange = event => {
    let zip = event.nativeEvent.text; // Extract the zip code for the entered zip 
    // Use helper method to fetch weather data for the entered zip
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      // Update the state with the fetched forecast data
      this.setState({ forecast: forecast }) ;
    });
  };

  // Render method: what will be displayed on the screen
  render() {
    let content = null; // Will hold the forecast component once data is available

    // If forecast data has been fetched, render the Forecast component
    if (this.state.forecast !== null) { 
      content = (
        <Forecast
        // Pass all relevant weather data as props to the forecast component
        main={this.state.forecast.main}
        description={this.state.forecast.description}
        temp={this.state.forecast.temp}
        feels_like={this.state.forecast.feels_like}
        temp_min={this.state.forecast.temp_min}
        temp_max={this.state.forecast.temp_max}
        humidity={this.state.forecast.humidity}
        wind_speed={this.state.forecast.wind_speed}
        wind_deg={this.state.forecast.wind_deg}
        pressure={this.state.forecast.pressure}
        visibility={this.state.forecast.visibility}
        sunrise={this.state.forecast.sunrise}
        sunset={this.state.forecast.sunset}
        city={this.state.forecast.city}
        country={this.state.forecast.country}
        icon={this.state.forecast.icon}
       /> 
      );
    }

    // Main UI returned from the component
    return ( 
      <View style={styles.container}>
        {/* Background Image */}
        <Image
          source={require('../../../assets/sky.jpg')}
          resizeMode="cover" // Cover entire area
          style={styles.backdrop}
        />

        {/* Transparent overlay for content */}
        <View style={styles.overlay}>
          {/* Row for "Current Weather For label and zip input */}
          <View style={styles.row}>
            <Text style={styles.mainText}>
              Current Weather For:{"\n"}
            </Text>

            {/* Container for zip code input */}
            <View style={styles.zipContainer}>
              <TextInput
                style={[styles.zipCode, styles.mainText]} // Apply input and text styles
                onSubmitEditing={this._hndleTextChange} // Trigger weather fetch
                underlineColorAndroid="transparent" // Remove underline Android
               /> 
            </View>
          </View>

          {/* Forecast display goes here once data is available */}
          {content}
        </View>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    backgroundColor: "#000000"
  },
  backdrop: {
    width: 500,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 10
  },
  overlay: {
    paddingTop: 5,
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#FFFAF0",
    borderBottomWidth: 3,
    marginLeft: 18
  },
  zipCode: {
    flex: 1,
    width: 100,
    height: baseFontSize
  },
  mainText: {
    fontSize: baseFontSize,
    color: "#FFFAF0"
  }
});

export default WeatherForecast;
