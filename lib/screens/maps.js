import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class Maps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <MapView
               //provider={PROVIDER_GOOGLE}
               style={{flex: 1}}
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
