import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Forecast extends Component {
  render() {
    return <View style={styles.container} />;
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
