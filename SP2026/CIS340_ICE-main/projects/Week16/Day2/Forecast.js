import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Define the Forecast component
class Forecast extends Component {
  render() {
    return (
      // Container for all weather info
      <View style={styles.container}>

        {/* Display city and country */}
        <Text style={styles.bigText}>
          {this.props.city}, {this.props.country}
        </Text>

        {/*  Weather icon based on the icon code from OpenWeatherMap */}
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${this.props.icon}.png` }}
          style={styles.weatherIcon}
        />

        {/* Main weather condition */}
        <Text style={styles.bigText}>{this.props.main}</Text>

        {/* More detailed weather description*/}
        <Text style={styles.mainText}>
          Current Conditions: {this.props.description}
        </Text>

        {/* Current temperature */}
        <Text style={styles.bigText}>{this.props.temp}°F</Text>

        {/* Feels-like temperature */}
        <Text style={styles.mainText}>
          Feels Like: {this.props.feels_like}°F
        </Text>

        {/* Minimum and maximum temperature for the day */}
        <Text style={styles.mainText}>
          Min: {this.props.temp_min}°F | Max: {this.props.temp_max}°F
        </Text>

        {/* Humidity percentage */}
        <Text style={styles.mainText}>
          Humidity: {this.props.humidity}%
        </Text>

        {/* Wind speed and direction */}
        <Text style={styles.mainText}>
          Wind: {this.props.wind_speed} mph, {this.props.wind_deg}°
        </Text>

        {/* Atmospheric pressure in hPa */}
        <Text style={styles.mainText}>
          Pressure: {this.props.pressure} hPa
        </Text>

        {/* Visbility in meters */}
        <Text style={styles.mainText}>
          Visibility: {this.props.visibility} meters
        </Text>

        {/* Sunrise time (already formatted) */}
        <Text style={styles.mainText}>
          Sunrise: {this.props.sunrise}
        </Text>

        {/* Sunset time (already formatted) */}
        <Text style={styles.mainText}>
          Sunset: {this.props.sunset}
        </Text>
      </View>
    );
  
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    alignItems: "flex-start",
    paddingLeft: 20
  },
  bigText: {
    fontSize: 20,
    textAlign: "left",
    color: "#FFFFFF"
  },
  mainText: {
    fontSize: 16,
    textAlign: "left",
    color: "#FFFFFF"
  },
  weatherIcon: {
    width: 50,
    height: 50
  }
});

export default Forecast;
