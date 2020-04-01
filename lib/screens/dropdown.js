import React, { Component } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <TextInput
                style={styles.dropdownTextBox}
                placeholder={this.props.placeholder}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
            />
        );
    }
}

const styles = StyleSheet.create({
    dropdownTextBox: {
        width: 200,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
    }
});