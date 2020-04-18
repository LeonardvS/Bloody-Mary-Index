import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import FlatButton from '../shared/button';

import Rating from '../ratingOptions/rating';
import Venue from '../ratingOptions/venue';
import Spice from '../ratingOptions/spiciness';
import Price from '../ratingOptions/price';
import Hangover from '../ratingOptions/hangover';
import Location from '../ratingOptions/location';

export default function Form () {
  const [rating, setRating] = useState('rating');
  const [venue, setVenue] = useState('venue');
  const [spice, setSpice] = useState('spice');
  const [price, setPrice] = useState('price');
  const [hangover, setHangover] = useState('hangover');
  const [location, setLocation] = useState('location');

  const allRatings = {
    rating,
    venue,
    spice,
    price,
    hangover,
    location
  }

  return (
    <ImageBackground source={require('../assets/BM.png')} style={styles.container}>
      <Text style={styles.text}>Bloody Mary Meter</Text>
      <Rating value={rating} onChange={setRating} />
      <Venue value={venue} onChange={setVenue} />
      <Spice value={spice} onChange={setSpice} />
      <Price value={price} onChange={setPrice} />
      <Hangover value={hangover} onChange={setHangover} />
      <Location value={location} onChange={setLocation} />
      <FlatButton onPress={() => console.log('all ratings', allRatings)} text='submit' style={styles.button} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    height: Dimensions.get('window').height/1.1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    marginTop: 10
  }
});