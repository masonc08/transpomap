import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Button } from 'react-native';
import Dropdown from './dropdown';
import Maps from './maps';
import DepartArriveButtonGroup from './departArriveButtonGroup';
import DateTimePicker from './dateTimePicker';

export default MainScreen = () => {

    return (
        <View style={styles.mainScreenStyle}>
            <View style={styles.dropdownContainer}>
                <Dropdown placeholder=' Start Location'
                //defaultValue= get user's current location
                />
            </View>
            <View style={styles.dropdownContainer}>
                <Dropdown placeholder=' End Location' />
            </View>

            <View style={styles.dropdownContainer}>
                    <DepartArriveButtonGroup />
            </View>

            <View style={styles.dropdownContainer}>
                <DateTimePicker />
            </View>

            <View style={styles.dropdownContainer}>
                <Button
                    title='Get Route'
                    onPress={() => {
                        Alert.alert('Confirm',
                            'Get route for inputted stops?',
                            [
                                { text: 'OK' },
                                //onPress: () => },
                                { text: 'Cancel', style: 'cancel' },
                                //onPress: () => },
                            ],
                            { cancelable: true });
                    }}
                />
            </View>

            <View style={styles.mapsContainer}>
                <Maps />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    mainScreenStyle: {
        flex: 1,
        paddingTop: (Platform.OS == 'ios') ? 40 : 0,
    },
    dropdownContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapsContainer: {
        borderTopWidth: 1,
        flex: 10,
    }
});


