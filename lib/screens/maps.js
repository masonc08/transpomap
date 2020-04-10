import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native';

export default class Maps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapsContainer}
                region={{
                    latitude: 43.558555,
                    longitude: -79.754450,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}
                showsUserLocation={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    mapsContainer: {
        flex: 1,
    }
});
