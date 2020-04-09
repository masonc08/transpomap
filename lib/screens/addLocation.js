
    import React, { Component } from 'react';

    import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, Platform } from 'react-native';

    import Dropdown from './dropdown';

    //import {styles} from './mainScreen';
    export default class AddLocation extends Component<{}>
    {
    constructor(){
    super();

    this.state ={

    ViewArray:[]    

    }



    this.Array_Value_Index=2;

    }

    Add_New_View_Function = () =>

    {
    let New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }

    this.setState({ ViewArray: [ ...this.state.ViewArray, New_Added_View_Value ] }, () =>
            {

       this.Array_Value_Index++;



    });





    }


    render(){

    let Render_Animated_View= this.state.ViewArray.map((item,key)=>

    {

    //if ((key)== this.Array_Value_Index)
    //{

      return(


         <View 
           key = { key }>
          style={{height:60,margin:5}}>
                    <Dropdown placeholder='End Location'/> 
                </View>


          );











    //}


    });

    return(
    <View style={{flex:1}}>
         <ScrollView>

    //            <View style={styles.dropdownContainer}>
    //    
    //        <Dropdown placeholder='Start Location'/> 
    //        
    //        </View>
    //        
    //        
    //          <View style={styles.dropdownContainer}>
    //         <Dropdown placeholder='End Location'/> 
    //         </View>

            <View style={{flex:1}}>
            {Render_Animated_View}
            </View>

            </ScrollView>


       <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
              <Button
                onPress={this.Add_New_View_Function}
                title="Add Location"
                color="#FF3D00"
              />
            </View> 


    </View>    

    );

    }




    }