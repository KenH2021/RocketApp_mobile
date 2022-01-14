import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList} from 'react-native';
import CustomerInput from '../CustomerInput';
import CustomerButton from '../CustomerButton/CustomerButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';


export default class ElevatorList extends React.Component {
  state = {
    elevatorList: []
  }
  
  componentDidMount() {
    axios.get(`https://rocket-ele.herokuapp.com/api/employees/`)
      .then(res => {
        const elevatorList = res.data;
        this.setState({ elevatorList });
        console.warn(elevatorList);

      })
  }

  render() {
    return (
      <View>
        { this.state.elevatorList.map(elevatorList => <Text>{elevatorList.status}</Text>)}
      </View>
    )
  }
}

