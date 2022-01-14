import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, } from 'react-native';


const index = () => {

  return (
    <View>
        <Text >You Home mon ami</Text>

        <ImageBackground source={require('../../assets/bgk_home.jpg')} style={styles.images}/>
  </View>
  );
}

const styles = StyleSheet.create ({
    images: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        },
});

export default index;