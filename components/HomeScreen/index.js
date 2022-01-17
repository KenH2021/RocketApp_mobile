import React, { Component , useState } from 'react';
import { View, Text, ImageBackground, Image, Pressable, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LogOut from '../LogOut';
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
  logOut() {
    Alert.alert("Success!","You're not log in anymore");
    this.props.navigation.navigate('SignIn');
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
        <View style={styles.listContainer}>
        <Image source={require('../../assets/header.png')} style={styles.colorHeader}/>
          <FlatList
            style={styles.flatlist}
            data={this.state.elevatorList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        <LogOut text="Log Out" onPress={() => this.logOut()} />
        </View>

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
    zIndex:0,
  },
  flatlist: {
    top: 60,
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
    colorHeader: {
      resizeMode: 'contain',
      position: 'absolute',
      top: 0,
      width: '100%',
      padding: 15,
      alignItems: 'center',
    },
});

