import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker"

export default class DateTimePicker extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
      isVisible: false
    }
  }

  pressPicker = () => {
    this.setState({ isVisible: true })
  }

  hidePicker = () => {
    this.setState({ isVisible: false })
  }

  onChange = selectedDate => {
    this.setState({ isVisible: false })
    this.setState({ date: selectedDate })
  }

  render() {
    const displayFormat = this.state.date.toLocaleString([],
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })

    return (
      <View style={styles.dateTimePickerBoxContainer}>
        <Button
          title={displayFormat}
          onPress={this.pressPicker} />
        <DateTimePickerModal
          isVisible={this.state.isVisible}
          mode='datetime'
          onConfirm={this.onChange}
          onCancel={this.hidePicker}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dateTimePickerBoxContainer: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
})
