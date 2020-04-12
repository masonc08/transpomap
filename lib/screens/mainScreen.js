import React from 'react'
import { StyleSheet, View, Alert, Button } from 'react-native'
import Maps from './maps'
import DepartArriveButtonGroup from './departArriveButtonGroup'
import DateTimePicker from './dateTimePicker'
import AddLocation from './addLocation'

export default MainScreen = () => {
  const getRoutePressed = () => {
    Alert.alert('Confirm',
      'Get route for inputted stops?',
      [
        { text: 'OK', onPress: () => { } },
        { text: 'Cancel', style: 'cancel', onPress: () => { } },
      ],
      { cancelable: true })
  }

  return (
    <View style={styles.mainScreenStyle}>
      <AddLocation />

      <View style={styles.dropdownContainer}>
        <DepartArriveButtonGroup />
      </View>

      <View style={styles.dropdownContainer}>
        <DateTimePicker />
      </View>

      <View style={styles.dropdownContainer}>
        <Button
          title='Get Route'
          onPress={getRoutePressed}
        />
      </View>

      <View style={styles.mapsContainer}>
        <Maps />
      </View>
    </View>

  )
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
})
