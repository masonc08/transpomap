import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, YellowBox} from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

export default class HomeActivity extends Component {
    


  constructor(props) {
     super(props)
     YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
   }

  render() {
    return (
             
      <MenuProvider style={{ flexDirection: 'column' }}>
        <Menu>

         <MenuTrigger  >
         <Text style={styles.headerText}>Mode</Text>
         </MenuTrigger >

          <MenuOptions>
            <MenuOption value={'Train'}>
              <Text style={styles.menuContent}>Train</Text>
            </MenuOption>
            <MenuOption value={'Bike'}>
              <Text style={styles.menuContent}>Bike</Text>
            </MenuOption>
            <MenuOption value={'Drive'} >
              <Text style={styles.menuContent}>Drive</Text>
            </MenuOption>
            <MenuOption value={'Walk'}>
              <Text style={styles.menuContent}>Walk</Text>
            </MenuOption>
        
          </MenuOptions>

        </Menu>
      </MenuProvider>
    );
  }
}

const styles = StyleSheet.create({
    headerText: {
    //fontSize: 10,
    margin: 10,
    //fontWeight: "bold"
  },
  menuContent: {
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
 //   color: "#000",
 //fontWeight: "bold",
  //padding: 2,
   //fontSize: 20,
  }
});