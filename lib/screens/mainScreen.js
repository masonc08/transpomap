import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Dropdown from './dropdown';
import Maps from './maps';

export default MainScreen = () => {
    return (
        <View style={styles.mainScreenStyle}>
            <View style={styles.dropdownContainer}>
                <Dropdown/>
            </View>

            <View style={styles.mapsContainer}>
                <Maps/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    mainScreenStyle: {
        flex: 1,
    },
    dropdownContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1

    },
    mapsContainer: {
        flex: 10,
    }

});



