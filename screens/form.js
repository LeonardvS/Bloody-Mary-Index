import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, AsyncStorage } from 'react-native';
import FlatButton from '../shared/button';
import { postBloodyMary } from '../services/apiClient';
import * as Location from 'expo-location';

import Rating from '../ratingOptions/rating';
import Venue from '../ratingOptions/venue';
import Spice from '../ratingOptions/spiciness';
import Price from '../ratingOptions/price';
import Hangover from '../ratingOptions/hangover';

export default function Form ({ navigation }) {
  const [venue, setVenue] = useState('venue');
  const [spice, setSpice] = useState('spice');
  const [price, setPrice] = useState('price');
  const [rating, setRating] = useState('rating');
  const [hangover, setHangover] = useState('hangover');
  const [errorMsg, setErrorMsg] = useState(null);
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLong(location.coords.longitude)
      setLat(location.coords.latitude)
    })();
  });

  const bloodyMaryRating = { rating, venue, spice, price, hangover, long, lat };

  const handlePress = () => {
    // console.log(bloodyMaryRating, 'bloody')
    postBloodyMary(bloodyMaryRating)
      .then((item) => {
        // console.log(item, 'item')
        AsyncStorage.setItem('data', JSON.stringify(item))
          .then(data => {
            // console.log(data, 'data')
            navigation.navigate('MyBloodyMarys')
          })
      });
  }

  return (
    <ImageBackground source={require('../assets/BM.png')} style={styles.container}>
      <Text style={styles.text}>Bloody Mary Meter</Text>
      <Rating value={rating} onChange={setRating} />
      <Venue value={venue} onChange={setVenue} />
      <Spice value={spice} onChange={setSpice} />
      <Price value={price} onChange={setPrice} />
      <Hangover value={hangover} onChange={setHangover} />
      {/* <Location value={location} onChange={setLocation} /> */}
      <FlatButton
        text='submit'
        style={styles.button}
        onPress={handlePress}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: Dimensions.get('window').height/1.1,
    backgroundColor: 'red'
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  }
});