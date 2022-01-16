import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default class ElevatorStatus extends React.Component {

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

