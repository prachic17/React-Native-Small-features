/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();
function Home({ navigation }) {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        You are on Home Screen
      </Text>
      <View style={styles.buttonDetails}>
      <Button
        title="Go to Details"
        color="#9B59B6"
        onPress={() => navigation.navigate('Details')}></Button>
    </View>
    </View>

  )
}
function Details({ navigation }) {
  return (
  <View style= {styles.body}>
    <Text style={styles.text}>
      You are on Details Screen
    </Text>
    <View  style ={styles.buttonHome}>
    <Button 
    title="Back to Home"
    color= "red"
    onPress={() => navigation.navigate('Home')}></Button>
  </View>
  </View>
  )
};



function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonHome: {
    marginTop: 20,
    borderRadius : 30
  },
  buttonDetails : {
    marginTop: 20,
  },
  text : {
    fontSize : 17
  }


});

export default App;
