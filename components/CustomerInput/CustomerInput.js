import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const CustomerInput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>

      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}/>
      </View>
    );
  };

  const styles = StyleSheet.create({
      container: {
          bottom: 150,
          alignItems:'center',
          position: 'absolute',
          backgroundColor: 'white',
          width: '100%',
          borderColor: '#e8e8e8',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginVertical: 5,
      },
      
      input: {},
  });
  
export default CustomerInput;