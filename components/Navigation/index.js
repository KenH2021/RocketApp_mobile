import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../HomeScreen';
import ElevatorStatus from '../ElevatorStatus';
import StartupScreen from '../StartupScreen';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={StartupScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Elevator" component={ElevatorStatus}/>
        </Stack.Navigator>
        
    </NavigationContainer>
    );
  };
  
  
export default Navigation;