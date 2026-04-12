import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

// Complete authentication session
WebBrowser.maybeCompleteAuthSession();

// Retrieve Auth0 credentials from app.json
const auth0Domain = Constants.expoConfig.extra.auth0Domain;
const auth0ClientId = Constants.expoConfig.extra.auth0ClientId;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create Auth0 authentication request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: auth0ClientId,
      redirectUri: makeRedirectUri({ scheme: "myapp" }), // Must match app.json scheme
      responseType: "token",
      scopes: ["openid", "profile", "email"],
    },
    { authorizationEndpoint: `https://${auth0Domain}/authorize` }
  );

  // Handle Auth0 response
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      handleAuth0Login(authentication.accessToken);
    }
  }, [response]);

  // Fetch user details from Auth0
  const handleAuth0Login = async (accessToken) => {
    try {
      const userInfoResponse = await fetch(`https://${auth0Domain}/userinfo`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userInfo = await userInfoResponse.json();

      // Store user info in AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(userInfo));

      Alert.alert("Success", "Logged in with Auth0!");
      navigation.navigate("Home", { userName: userInfo.name || "User" });
    } catch (error) {
      Alert.alert("Error", "Auth0 Login failed");
    }
  };

  // Traditional local login (for AsyncStorage users)
  const handleLocalLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const {
          email: storedEmail,
          password: storedPassword,
          name: storedName,
        } = JSON.parse(storedUser);
        if (email === storedEmail && password === storedPassword) {
          Alert.alert("Success", "Logged in successfully!", [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("Home", { userName: storedName }),
            },
          ]);
        } else {
          Alert.alert("Error", "Invalid email or password");
        }
      } else {
        Alert.alert("Error", "No user found. Please sign up first.");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/AnanthIyerKrishnan/CIS340/master/images/CSU_Logo.png",
        }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
        placeholderTextColor="#aaa"
      />
      <Button title="Login" onPress={handleLocalLogin} />
      <View style={styles.buttonSpacing}>
        <Button
          title="Login with Auth0"
          onPress={() => promptAsync()}
          color="green"
          disabled={!request}
        />
      </View>
      <View style={styles.buttonSpacing}>
        <Button
          title="New User? Sign Up"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start", // makes the content appear from the start
    backgroundColor: "#eaf4e2", // Softer greenish background
  },
  logo: {
    width: 220,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 24,
    color: "#2e4e1f", // Darker green tone for text
  },
  input: {
    borderWidth: 1,
    borderColor: "#b4c9a9",
    padding: 12,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Android shadow
  },
  buttonSpacing: {
    marginTop: 10,
  },
});

export default LoginScreen;
