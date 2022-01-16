import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomerInput from '../CustomerInput';
import CustomerButton from '../CustomerButton/CustomerButton';
import {useNavigation} from '@react-navigation/native';

import axios from 'axios';


export default class HomeScreen extends React.Component {
  state = {elevatorList: []}
  

  componentDidMount() {
    axios.get(`https://rocket-ele.herokuapp.com/api/Elevators/OfflineElevators/`)
      .then(res => {
        const elevatorList = res.data;
        this.setState({elevatorList});
      })
  }

    render() {
      const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={(onPress) =>
          this.props.navigation.navigate("Elevator", {id: item.id, status: item.status} )}
        style={[styles.item, backgroundColor]}>
          <Text style={styles.listContainer}>Elevator #:{item.id} Status:{item.status} </Text>
        </TouchableOpacity>
      );
      
      const renderItem = ({ item }) => {
      
    return (
        <Item
          item={item}
        />
      );
    };

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.elevatorList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

        </SafeAreaView>
        
        );
  }
}

const styles = StyleSheet.create ({
  header: {
    top: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,

  },
  listContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 19,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    marginVertical: 5,
    textAlign:'center',
    padding: 3,
    borderRadius: 10,
    justifyContent:'space-between',
    
  },
  listName: {
    textAlign:'center',
    flex: 0.5,
    alignItems:'flex-start',
    padding: 3,
  },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 32,
    },
});

