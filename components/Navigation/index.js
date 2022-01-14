import React from 'react';

import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartupScreen from '../StartupScreen';
import HomeScreen from '../HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={StartupScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
    );
  };
  
  
export default Navigation;