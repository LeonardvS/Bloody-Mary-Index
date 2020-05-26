import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Dimensions, ActivityIndicator, Image, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function Map(props) {
  const [markerLocations, setMarkerLocations] = useState([])
  const { navigation: { state: { params: loc } } } = props;

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    setMarkerLocations(loc.loc);
  }, [])

  let threeStars = <Image source={require('../assets/3stars.png')} style={styles.img1} />;
  let twoStars = <Image source={require('../assets/2stars.png')} style={styles.img1} />;
  let oneStar = <Image source={require('../assets/1star.png')} style={styles.img1} />;

  function markerRatings(hangover, price, rating, spice, venue) {
    if ((hangover + price + rating + spice + venue) >= 20) return threeStars;
    else if ((hangover + price + rating + spice + venue) >= 10) return twoStars;
    return oneStar;
  }

  function populateMarkers(markerLocations) {
    return markerLocations && markerLocations.map((marker) => {
      const { lat, long, hangover, price, rating, spice, venue, address } = marker;
      return (<Marker
        key={marker._id}
        coordinate={{ latitude: lat, longitude: long }}
      >
        <Callout>
          <Text>{markerRatings(hangover, price, rating, spice, venue)}</Text>
          <Text>Googleplex</Text>
          <Text>{address}</Text>
        </Callout>
      </Marker>)
    })
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <>
      {location !== null ? (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            longitudeDelta: 0.07,
            latitudeDelta: 0.08
          }}
        >
          {populateMarkers(markerLocations)}
        </MapView>
      ) :
        <ActivityIndicator style={styles.container} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  img1: {
    width: 50,
    height: 40,
  }
})


