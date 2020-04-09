import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import Dropdown from './dropdown';
import AddLocation from './addLocation';


export default MainScreen = () => {
   
    return (
    <>
        
     
        <View style=
       {styles.mainScreenStyle}>
        
        <View style={{flex:4}}>
            <AddLocation/>
        </View>
        <View style={styles.mapsContainer}>
            
        <Text>Map goes here</Text>
    
        </View>
        </View>
  </>  
           );
}



export const styles = StyleSheet.create({
    mainScreenStyle: {
        flex: 1,
    },
    dropdownContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:2,
        margin:5,
        //borderBottomWidth: 1
    },
    mapsContainer: {
        borderTopWidth: 1,
        flex: 10,
    }
});

