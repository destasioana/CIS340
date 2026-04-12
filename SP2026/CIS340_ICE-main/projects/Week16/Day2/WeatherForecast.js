import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

// Keep imports for teaching/demo purposes
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";  

class WeatherForecast extends Component {
  render() {
    return <View style={styles.container} />;
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
