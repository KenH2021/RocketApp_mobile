import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CustomerButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button</Text>
    </View>
    );
  };

  const styles = StyleSheet.create({
   
    container: {
      position: 'absolute',
      bottom: 90,
      backgroundColor: '#3B71F3',
      width: '100%',
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
      marginVertical: 5,
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    },
    

});
export default CustomerButton;