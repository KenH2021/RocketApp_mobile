import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import LogOut from '../LogOut';
import axios from 'axios';

export default class ElevatorStatus extends React.Component {
  state = {updatedStatus: []}
  
  updateElevatorStatus() {
    console.log(this.props.route.params.id);
    
    return axios.put(`https://rocket-ele.herokuapp.com/api/Elevators/changeStatus/${this.props.route.params.id}`)
    .then(res => {
      const updatedStatus = res.data;
      this.setState({updatedStatus});
    })
  }
  render() { 
    const {id, status} = this.props.route.params 
    
  return (

    <View style={styles.listContainer}>
      <Text style={styles.header}>
        Elevator List
      </Text>
      <Text style={styles.listName}>
        Elevator #:{id}
        Status:{status}
      </Text>
      <Text>
      <LogOut text="Update Elevator Status" onPress={() => this.updateElevatorStatus()} />
      </Text>
    </View>

    );
   }
  }

const styles = StyleSheet.create ({
  header: {
    fontSize: 25,
    alignItems:'center',
    backgroundColor: '#ddd',
    top: 5,
    padding: 3,      
  },
  listContainer: {
    width: "100%",
    alignItems:'center',
    backgroundColor: '#ddd',
    marginVertical: 5,
    top: 100,
    padding: 3,      
  },
  listName: {
    alignContent: 'center',
    fontSize: 25,
    padding: 3,
    alignItems:'center',

  },
});

