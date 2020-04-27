
import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Button } from 'react-native'
import Dropdown from './dropdown'

export default class AddLocation extends Component {
  constructor() {
    super()
    this.state = {
      ViewArray: [],
      disabled: false
    }
    this.addNewEle= false
    this.Array_Value_Index = 2
    
  }
  Add_New_View_Function = () => {
    this.addNewEle=true
    const New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }
    this.setState({disabled:true, ViewArray: [...this.state.ViewArray, New_Added_View_Value] }, () => {
      this.Array_Value_Index++
    })
  }
  
    
   remove(Array_Value_Index) {
    this.addNewEle = false;
    const newArray = [...this.state.ViewArray];
    newArray.splice(newArray.findIndex(ele => ele.Array_Value_Index=== Array_Value_Index), 1);

    this.setState(() => {
      return {
        ViewArray: newArray
      }
    });
  }
  render() {
    const Render_Animated_View = this.state.ViewArray.map( ele => {
              return (
                <View style={styles.newLocationContainer}>  
                <Dropdown
                  key={ele.Array_Value_Index}
                  item={ele}
                  removeItem={(Array_Value_Index) => this.remove(Array_Value_Index)}
                  placeholder='End Location'
                />
                </View>
              )
            }
        
        
        
        
       /* (item, key) =>

      <View key={key} style={styles.newLocationContainer}>
        <Dropdown placeholder='End Location' />
  */

    )

    return (
      <View>
        
        <ScrollView style={styles.limitScrollContainer}  
          ref={scrollView => this.scrollView = scrollView}
          onContentSizeChange={() => {
            this.addNewEle && this.scrollView.scrollToEnd();
          }}>

       
            <Dropdown placeholder='Start Location'/>
            <Dropdown placeholder='End Location' />
        

          <View style={styles.addLocationContainer}>
            <View>
              {Render_Animated_View}
            </View>
          </View>

        </ScrollView>

        <View>
          <Button
            disabled={this.state.disabled}
            onPress={this.Add_New_View_Function}
            title="Add Location"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

