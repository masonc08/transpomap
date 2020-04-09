import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView} from 'react-native';
import Dropdown from './dropdown';
import AddLocation from './addLocation';


export default MainScreen = () => {
   
    return (<>
        
     
        <View style=
       {styles.mainScreenStyle}>
        
//        <ScrollView>
//        
////            <View style={styles.dropdownContainer}>
////    
////        <Dropdown placeholder='Start Location'/> 
////        
////        </View>
////        
////        
////          <View style={styles.dropdownContainer}>
////         <Dropdown placeholder='End Location'/> 
////         </View>
//              
//        <View style={styles.dropdownContainer}>
//        {AddLocation.Render_Animated_View}
//        </View>
//        
//        </ScrollView>
//       
//
//   <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
//          <Button
//            onPress={AddLocation.Add_New_View_Function}
//            title="Add Location"
//            color="#FF3D00"
//          />
//        </View> 
        
        <View>
            <AddLocation/>
        </View>
         //  <View style={styles.mapsContainer}>
              
         //<Text>Map goes here</Text>
       
         //   </View>
        </View>
  </>  
           );
}



export const styles = StyleSheet.create({
    mainScreenStyle: {
        flex: 1,
    },
    dropdownContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:2,
        margin:5,
        //borderBottomWidth: 1
    },
    mapsContainer: {
        borderTopWidth: 1,
        flex: 10,
    }

});

