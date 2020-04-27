import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'
import HomeActivity from './ModeSelect'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' , value: ''}
    
  }
    
    
 /*shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item.id !== this.props.item.id) {
      return true;
    }
    return false;
  }
   */ 
    
removeItem = () => {

 this.props.removeItem(this.props.item.id)
}

  render() {
    return (
    <View  style={styles.dropdownContainer}>
      <TextInput
        style={styles.dropdownTextBox}
        placeholder={this.props.placeholder}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
      />
    
    <TouchableOpacity
          onPress={this.removeItem}
        >
    <Text> Delete</Text>
 
    </TouchableOpacity>
    <HomeActivity onSelect= {value => this.setState({ value })}/>
</View>
 
    )
  }
}




const styles = StyleSheet.create({
  dropdownContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dropdownTextBox: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  }
})
