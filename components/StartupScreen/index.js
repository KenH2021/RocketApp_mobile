import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable} from 'react-native';
import CustomerInput from '../CustomerInput';
import CustomerButton from '../CustomerButton/CustomerButton';
import styles from './styles'


const StartupScreen = () => {
  const [username, setUsername] = useState('');

  const OnSignInPressed = () => {
    console.warn("Sign In");
  }  
  return (
    <View style={styles.bgkContainer}>
    <ImageBackground source={require('../../assets/bgk.jpg')} style={styles.images}/>
    <Image source={require('../../assets/logo_w.png')} style={styles.logo}/>

    <View style={styles.titles}>
      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subtitle}>Starting at 9099 S</Text>
    </View>
      <CustomerInput placeholder="Please enter your Email" value={username} setValue={setUsername}/>
      <CustomerButton text="Sign In" onPress={OnSignInPressed} />
  </View>
  );
}

export default StartupScreen;