
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import Dropdown from './dropdown'

export default class AddLocation extends Component {
  constructor() {
    super()
    this.state = {
      ViewArray: []
    }
    this.Array_Value_Index = 2
  }
  Add_New_View_Function = () => {
    const New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }
    this.setState({ ViewArray: [...this.state.ViewArray, New_Added_View_Value] }, () => {
      this.Array_Value_Index++
    })
  }
  render() {
    const Render_Animated_View = this.state.ViewArray.map((item, key) =>

      <View key={key} style={styles.newLocationContainer}>
        <Dropdown placeholder='End Location' />
      </View>

    )

    return (
      <View>
        <ScrollView style={styles.limitScrollContainer}>
          <View style={styles.dropdownContainer}>
            <Dropdown placeholder='Start Location'
            //defaultValue= get user's current location
            />
          </View>

          <View style={styles.dropdownContainer}>
            <Dropdown placeholder='End Location' />
          </View>

          <View style={styles.addLocationContainer}>
            <View>
              {Render_Animated_View}
            </View>
          </View>

        </ScrollView>

        <View>
          <Button
            onPress={this.Add_New_View_Function}
            title="Add Location"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLocationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  limitScrollContainer: {
    height: 150,
  },
  newLocationContainer: {
    paddingTop: 5,
    height: 50
  }
})
