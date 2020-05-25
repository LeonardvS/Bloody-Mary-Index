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
import Address from '../ratingOptions/address';

export default function Form ({ navigation }) {
  const [venue, setVenue] = useState(1);
  const [spice, setSpice] = useState(1);
  const [price, setPrice] = useState(1);
  const [rating, setRating] = useState(1);
  const [hangover, setHangover] = useState(1);
  const [address, setAddress] = useState('📍');
  const [long, setLong] = useState('');
  const [lat, setLat] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

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

  const bloodyMaryRating = { rating, venue, spice, price, hangover, long, lat, address };

  const handlePress = () => {
    postBloodyMary(bloodyMaryRating)
      .then((item) => {
        AsyncStorage.setItem('data', JSON.stringify(item))
          .then(data => {
            navigation.navigate('MyBloodyMarys')
          })
      });
  }

  return (
    <ImageBackground source={require('../assets/BM.png')} style={styles.container}>
      <Text style={styles.text}>Bloody Mary Meter</Text>
      <Rating value={rating} onChange={setRating} />
      <Venue value={venue} onChange={setVenue} />
      <Price value={price} onChange={setPrice} />
      <Hangover value={hangover} onChange={setHangover} />
      <Spice value={spice} onChange={setSpice} />
      <Address value={address} onChange={setAddress} />
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