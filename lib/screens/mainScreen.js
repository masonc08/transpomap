import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Dropdown from './dropdown';

export default MainScreen = () => {
    return (
        <View style={styles.mainScreenStyle}>
            <View style={styles.dropdownContainer}>
                 <Dropdown placeholder='Start Location'/>
            </View>
        
         <View style={styles.dropdownContainer}>
                <Dropdown placeholder='End Location'/> 
            </View>
       
        
           <View style={styles.mapsContainer}>
              
         <Text>Map goes here</Text>
       
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    mainScreenStyle: {
        flex: 1,
    },
    dropdownContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //borderBottomWidth: 1
    },
    mapsContainer: {
        borderTopWidth: 1,
        flex: 10,
    }

});

