import React, { Component } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        const styles = StyleSheet.create({
            dropdownTextBox: {
                // flex: 5,
                // flexDirection: 'column',
                //justifyContent: 'space-between',
                width: 200,
                height: 40,
                borderColor: 'black',
                borderWidth: 1,
            }
        });
        return (
             <TextInput
                 style={styles.dropdownTextBox }
                 placeholder='Start Location'
                 onChangeText={text => this.setState({ text })}
                 value={this.state.text}
             />
        );
    }
}
