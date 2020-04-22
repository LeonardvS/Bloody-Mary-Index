import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {Permissions, Location, MapView} from 'expo';
import MapView from 'react-native-maps';

export default function Map () {
  const [status, setStatus] = useState('')
  const [location, setLocation] = useState({})

  useEffect(() => {
    async getUserLocation => {
      let {status} = await Permissions.askAsync(Permissions.LOCATION)
      if (status !== 'granted') {
        setStatus(null)
      } else {
        setStatus(true)
      }

      let userLocation = await Location.getUserLocation()
        setLocation(userLocation)
      }
  })

  console.log(location, 'location')

  return (
    <MapView style={styles.map} initialRegion={{
      latitude: 48.137154,
      longitude: 11.576124,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}></MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  map: {
    flex: 1
  }
})


