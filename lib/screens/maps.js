import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import { StyleSheet } from 'react-native'
import { dummyResponse } from '../utils/constants'
import responseToPoints from '../utils/responseToPoints'


export default class Maps extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapsContainer}
        region={{
          latitude: 43.65331,
          longitude: -79.38277,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        showsUserLocation={true}
      >
        <Polyline
          coordinates={responseToPoints(dummyResponse)}
        />
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  mapsContainer: {
    flex: 1,
  }
})
