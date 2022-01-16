import React, { Component , useState } from 'react';
import { View, TextInput, ImageBackground, Image, Pressable, FlatList} from 'react-native';
import CustomerInput from '../CustomerInput';
import CustomerButton from '../CustomerButton/CustomerButton';
import axios from 'axios';
import styles from './styles'


export default class StartupScreen extends React.Component {

  state = {
    email_input: ''
  }

  getInfo() {

    return axios.get(`https://rocket-ele.herokuapp.com/api/Employees/emailValidation?email=${this.state.email_input}`)
      .then(res => {
        const response = res.data;
        console.log(this.state.email_input);
        console.log(response);

        console.log(this.state.email_input);

        if (response == true) {
          this.props.navigation.navigate('Home');
        } else {
          console.log("Not a Employee");
        }
      })
  

  }

  render() {
    return (
      <View style={styles.bgkContainer}>
      <ImageBackground source={require('../../assets/bgk.jpg')} style={styles.images}/>
      <Image source={require('../../assets/logo_w.png')} style={styles.logo}/>

      <View style={styles.titles}>
      <TextInput style={styles.input} placeholder="Please enter your Email" onChangeText={(text) => this.setState({ email_input: text })}/>

      </View>
        <CustomerButton text="Sign In" onPress={() => this.getInfo()} />
    </View>
  );
}
}



