import React, { Component , useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import LogOut from '../LogOut';
import axios from 'axios';
import { Button } from 'react-native-web';

export default class ElevatorStatus extends React.Component {
  state = {updatedStatus: []}
  constructor(){
    super();
    this.state = {
      data: "Offline"
    }
  }
  
  async updateElevatorStatus() {
    
     await axios.put(`https://rocket-ele.herokuapp.com/api/Elevators/changeStatus/${this.props.route.params.id}`)
    .then(res => {
      const updatedStatus = res.data;
      this.setState({updatedStatus});
    })
     await axios.get(`https://rocket-ele.herokuapp.com/api/Elevators/newStatus/${this.props.route.params.id}`)
    .then(res => {
      const data = res.data.status;
      this.setState({data});
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
      <Image source={require('../../assets/header.png')} style={styles.colorHeader}/>

      <Text style={styles.header}>
        Elevator Status
      </Text>
      <Text style={styles.wrap}>
        <Text style={styles.listName}>Elevator #:{id}</Text>
        <Text style={[styles.status, {color: updateStatusColor}]}>Status:{this.state.data}</Text>
      </Text>
      <Text style={styles.button_container}>
      <LogOut text="Update Elevator Status" onPress={() => this.updateElevatorStatus()} />
      <LogOut text="Back" onPress={() => this.back()} />
      </Text>
    </View>

    );
   }
  }
  
  const styles = StyleSheet.create ({
  header: {
    textTransform: 'uppercase',
    fontSize: 25,
    alignItems:'center',
    backgroundColor: '#ddd',
    top: 120,
    padding: 3,      
  },
  button_container: {
    justifyContent:'center',
    bottom: 80,
    padding: 3,      
    top: 200,
  },
  listContainer: {
    width: '100%',
    height: '100%',
    flex: 0,
    alignItems:'center',
    backgroundColor: '#ddd',
    top: 15,
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
  wrap: {
    alignContent: 'center',
    fontSize: 20,
    padding: 3,
    alignItems:'center',
    textTransform: 'uppercase',
    top: 200,
  },
  
  colorHeader: {
    resizeMode: 'contain',
    position: 'absolute',
    top: 0,
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
});

