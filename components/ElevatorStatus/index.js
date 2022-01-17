import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import LogOut from '../LogOut';
import axios from 'axios';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default class ElevatorStatus extends React.Component {
  state = {updatedStatus: []}
  constructor(){
    super();
    this.state = {
      data: "Offline"
    }
  }
  
  async updateElevatorStatus() {
    console.log("Cliked");
    console.log(this.props.route.params.id);
    
     await axios.put(`https://rocket-ele.herokuapp.com/api/Elevators/changeStatus/${this.props.route.params.id}`)
    .then(res => {
      const updatedStatus = res.data;
      this.setState({updatedStatus});
    })
     await axios.get(`https://rocket-ele.herokuapp.com/api/Elevators/newStatus/${this.props.route.params.id}`)
    .then(res => {
      const data = res.data.status;
      console.log(data);
      this.setState({data});
      console.log(data.status);
    })
  }
  
  back() {
    this.props.navigation.navigate('Home');
  }

    render() { 
      const type = this.state.data;
      const updateStatusColor = type === 'Online' ? 'green' : 'red';
      const {id, status} = this.props.route.params 


  return (

    <View style={styles.listContainer}>
      <Text style={styles.header}>
        Elevator List
      </Text>
      <Text style={styles.listName}>Elevator #:{id}</Text>
      <Text style={[styles.status, {color: updateStatusColor}]}>Status:{this.state.data}</Text>

      <Text style={styles.listName}>
      <LogOut text="Update Elevator Status" onPress={() => this.updateElevatorStatus()} />
      <LogOut text="Back" onPress={() => this.back()} />
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
  button_container: {
    justifyContent:'space-between',
    bottom: 80,
    padding: 3,      
  },
  listContainer: {
    width: '100%',
    height: '100%',

    flex: 1,
    width: "100%",
    height: "100%",
    alignItems:'center',
    backgroundColor: '#ddd',
    marginVertical: 5,
    top: 100,
  },
  listName: {
    alignContent: 'center',
    fontSize: 25,
    padding: 3,
    alignItems:'center',
    textTransform: 'uppercase',
  },
  status: {
    alignContent: 'center',
    fontSize: 25,
    padding: 3,
    alignItems:'center',
    textTransform: 'uppercase',
  },
});

