import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import CustomerInput from '../CustomerInput';
import styles from './styles';

const StartupScreen = (props) => {
  return (
    <View style={styles.bgkContainer}>
    <ImageBackground source={require('../../assets/bgk.jpg')} style={styles.images}/>

    <View style={styles.titles}>

      <Text style={styles.title}>Model S</Text>
      <Text style={styles.subtitle}>Starting at 9099 S</Text>
      <CustomerInput/>
    </View>
  </View>
  );
}

export default StartupScreen;