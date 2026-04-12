// Import necessary libraries and components for building the app UI and navigation
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import authentication screens
import LoginScreen from './auth/LoginScreen';
import SignupScreen from './auth/SignupScreen';

// Import your projects here

// ---------------- WEEK 12 ---------------- //
// Day 1 project screens
import FullNameWithPet from './projects/Week12/Day1/FullNameWithPet';
import MyStudentProfile from './projects/Week12/Day1/MyStudentProfile';
import PetInfo from './projects/Week12/Day1/PetInfo';
import TextInputExample from './projects/Week12/Day1/TextInputExample';

// Day 2 project screens
import ButtonAlerts from './projects/Week12/Day2/ButtonAlerts';
import DogApp from './projects/Week12/Day2/DogApp';
import MultiStudent from './projects/Week12/Day2/MultiStudent';
import MultiTVs from './projects/Week12/Day2/MultiTVs';

// ---------------- WEEK 13 ---------------- //
// Day 1 project screens
import ClassComponentExample from './projects/Week13/Day1/ClassComponentExample';
import ScrollViewExample from './projects/Week13/Day1/ScrollViewExample';
import StatesFlatList from './projects/Week13/Day1/StatesFlatList';
import WordConvertor from './projects/Week13/Day1/WordConverter';

// Day 2 project screens
import EqualFlexLayout from './projects/Week13/Day2/EqualFlexLayout';
import FixedSizeLayout from './projects/Week13/Day2/FixedSizeLayout';
import FlexLayout from './projects/Week13/Day2/FlexLayout';
import FlippableMealCards from './projects/Week13/Day2/FlippableMealCards';
import RowLayout from './projects/Week13/Day2/RowLayout';
import SpaceEvenlyLayout from './projects/Week13/Day2/SpaceEvenlyLayout';
import StyledText from './projects/Week13/Day2/StyledText';

// ---------------- WEEK 14 ---------------- //
// Day 1 project screens
import CoinFlipApp from './projects/Week14/Day1/CoinFlipApp';
import DiceRoller from './projects/Week14/Day1/DiceRoller';

// Day 2 project screen
import ThemeToggle from './projects/Week14/Day2/ThemeToggle';
import CounterApp from './projects/Week14/Day2/CounterApp';

// ---------------- WEEK 15 ---------------- //
// Day 1 project screen
import ToDoList from './projects/Week15/Day1/ToDoList';
import bmiCalculator from './projects/Week15/Day1/bmiCalculator';
// Day 2 project screen
import CitiesSelectionList from './projects/Week15/Day2/CitiesSectionList';
// ---------------- WEEK 16 ---------------- //
// Day 1 project screen
import ImagePickerAndShare from './projects/Week16/Day1/ImagePickerAndShare';

// Day 2 project screen
import WeatherForecast from './projects/Week16/Day2/WeatherForecast';

// Create a Stack Navigator object which manages the navigation between different screens
const Stack = createStackNavigator();

// ---------------- HOME SCREEN COMPONENT ---------------- //
// This screen is shown after login and lists all project modules week-wise
function HomeScreen({ route, navigation }) {
  const userName = route.params.userName || 'User'; // Get username from params

  // Show logout confirmation and go back to login screen
  const handleLogout = () => {
    Alert.alert('Success', 'Logged out successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'), // Navigate to Login screen after logout
      },
    ]);
  };

  return (
    // ScrollView makes the screen vertically scrollable when the content is long, which view the list of project with text title and buttons to navigate to each project
    <ScrollView style={styles.container}>
      {/* Greeting message shown at the top of the screen */}
      <Text style={styles.text}>Welcome, {userName}!</Text>

      {/* Subheading to introduce the project list */}
      <Text style={styles.title}>My Projects:</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 12 - Day 1</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('PetInfo')}>
          <Text style={styles.cardButtonText}>Pet Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('FullNameWithPet')}>
          <Text style={styles.cardButtonText}>Full Name With Pet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('MyStudentProfile')}>
          <Text style={styles.cardButtonText}>My Student Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('TextInputExample')}>
          <Text style={styles.cardButtonText}>Text Input Example</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 12 - Day 2</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('DogApp')}>
          <Text style={styles.cardButtonText}>Dog App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('MultiStudent')}>
          <Text style={styles.cardButtonText}>Multi Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('MultiTVs')}>
          <Text style={styles.cardButtonText}>Multi TVs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('ButtonAlerts')}>
          <Text style={styles.cardButtonText}>Button Alerts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 13 - Day 1</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('ClassComponentExample')}>
          <Text style={styles.cardButtonText}>Class Component Example</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('ScrollViewExample')}>
          <Text style={styles.cardButtonText}>ScrollView Example</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('StatesFlatList')}>
          <Text style={styles.cardButtonText}>States FlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('WordConvertor')}>
          <Text style={styles.cardButtonText}>Word Converter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 13 - Day 2</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('EqualFlexLayout')}>
          <Text style={styles.cardButtonText}>Equal Flex Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('FixedSizeLayout')}>
          <Text style={styles.cardButtonText}>Fixed Size Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('FlexLayout')}>
          <Text style={styles.cardButtonText}>Flex Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('RowLayout')}>
          <Text style={styles.cardButtonText}>Row Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('SpaceEvenlyLayout')}>
          <Text style={styles.cardButtonText}>Space Evenly Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('StyledText')}>
          <Text style={styles.cardButtonText}>Styled Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('FlippableMealCards')}>
          <Text style={styles.cardButtonText}>Flippable Meal Cards</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 14 - Day 1</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('CoinFlipApp')}>
          <Text style={styles.cardButtonText}>Coin Flip App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('DiceRoller')}>
          <Text style={styles.cardButtonText}>Dice Roller</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 14 - Day 2</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('ThemeToggle')}>
          <Text style={styles.cardButtonText}>Theme Toggle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('CounterApp')}>
          <Text style={styles.cardButtonText}>Counter App</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 15- Day 1</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('ToDoList')}>
          <Text style={styles.cardButtonText}>To-Do List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('bmiCalculator')}>
          <Text style={styles.cardButtonText}>BMI Calculator</Text>
        </TouchableOpacity>
      
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 15- Day 2</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('CitiesSelectionList')}>
          <Text style={styles.cardButtonText}>Cities Selection List</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 16- Day 1</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('ImagePickerAndShare')}>
          <Text style={styles.cardButtonText}>Image Picker And Share</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.card}>
        <Text style={styles.cardTitle}>Week 16- Day 2</Text>
        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('WeatherForecast')}>
          <Text style={styles.cardButtonText}>Weather App</Text>
        </TouchableOpacity>
      </View>

      {/* Logout button at the bottom */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={[styles.cardButton, { backgroundColor: '#004B23' }]} onPress={handleLogout}>
          <Text style={styles.cardButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
// ---------------- ROOT APP COMPONENT ---------------- //
// This component wraps the entire app with navigation container and defines all available screens
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Week 12 - Day 1 */}
        <Stack.Screen name="FullNameWithPet" component={FullNameWithPet} />
        <Stack.Screen name="MyStudentProfile" component={MyStudentProfile} />
        <Stack.Screen name="PetInfo" component={PetInfo} />
        <Stack.Screen name="TextInputExample" component={TextInputExample} />

        {/* Week 12 - Day 2 */}
        <Stack.Screen name="ButtonAlerts" component={ButtonAlerts} />
        <Stack.Screen name="DogApp" component={DogApp} />
        <Stack.Screen name="MultiStudent" component={MultiStudent} />
        <Stack.Screen name="MultiTVs" component={MultiTVs} />

        {/* Week 13 - Day 1 */}
        <Stack.Screen name="ClassComponentExample" component={ClassComponentExample} />
        <Stack.Screen name="ScrollViewExample" component={ScrollViewExample} />
        <Stack.Screen name="StatesFlatList" component={StatesFlatList} />
        <Stack.Screen name="WordConvertor" component={WordConvertor} />

        {/* Week 13 - Day 2 */}
        <Stack.Screen name="EqualFlexLayout" component={EqualFlexLayout} />
        <Stack.Screen name="FixedSizeLayout" component={FixedSizeLayout} />
        <Stack.Screen name="FlexLayout" component={FlexLayout} />
        <Stack.Screen name="FlippableMealCards" component={FlippableMealCards} />
        <Stack.Screen name="RowLayout" component={RowLayout} />
        <Stack.Screen name="SpaceEvenlyLayout" component={SpaceEvenlyLayout} />
        <Stack.Screen name="StyledText" component={StyledText} />



        {/* Week 14 - Day 1 */}
        <Stack.Screen name="CoinFlipApp" component={CoinFlipApp} />
        <Stack.Screen name="DiceRoller" component={DiceRoller} />

        {/* Week 14 - Day 2 */}
        <Stack.Screen name="ThemeToggle" component={ThemeToggle} />
        <Stack.Screen name="CounterApp" component={CounterApp} />

        {/* Week 15 - Day 1 */}
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="bmiCalculator" component={bmiCalculator} />

        {/* Week 15 - Day 2 */}
        <Stack.Screen name="CitiesSelectionList" component={CitiesSelectionList} />

        {/* Week 16 - Day 1 */}
        <Stack.Screen name="ImagePickerAndShare" component={ImagePickerAndShare} />

        {/* Week 16 - Day 2 */}
        <Stack.Screen name="WeatherForecast" component={WeatherForecast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ---------------- STYLESHEET SECTION ---------------- //
// All visual styles for layout, colors, fonts, padding, etc.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#A9D08E', // Light Green background
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#004B23', // CSU Green
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#004B23', // CSU Green
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Adds shadow on Android
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#004B23', // CSU Green
  },
  cardButton: {
    backgroundColor: '#004B23', // CSU Green
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 8,
    width: '100%',
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#ffffff', // White text
    fontSize: 16,
    fontWeight: '500',
  },
  logoutContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
