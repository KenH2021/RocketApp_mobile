import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomerInput from '../CustomerInput';
import CustomerButton from '../CustomerButton/CustomerButton';
import {useNavigation} from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default class ElevatorList extends React.Component {

  render() { 
    const {id, status} = this.props.route.params          
  return (
        <View style={styles.listContainer}>
          <Text style={styles.listName}>
            Elevator #:{id}
            Status:{status}

          </Text>
        </View>
    );
   }
  }

const styles = StyleSheet.create ({
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
});

