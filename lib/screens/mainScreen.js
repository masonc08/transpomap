import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert, Button, ScrollView } from 'react-native';
import Dropdown from './dropdown';
import Maps from './maps';
import DepartArriveButtonGroup from './departArriveButtonGroup';
import DateTimePicker from './dateTimePicker';
import AddLocation from './addLocation';

export default MainScreen = () => {

    return (
        <View style={styles.mainScreenStyle}>

            <AddLocation/>

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



export const styles = StyleSheet.create({
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


