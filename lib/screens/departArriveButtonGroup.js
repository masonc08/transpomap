import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export default class departArriveButtonGroup extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
    }

    updateIndex = (selectedIndex) => {
        this.setState({ selectedIndex })
    }

    render() {
        const buttons = ['Depart At', 'Arrive By']
        const { selectedIndex } = this.state

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={styles.buttonGroupContainer}
            />
        )
    }
}

const styles = StyleSheet.create({
    buttonGroupContainer: {
        width: 200,
        height: 40,
    },
});