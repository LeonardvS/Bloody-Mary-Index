import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions, AsyncStorage} from 'react-native';
import FlatButton from '../shared/button';

import Rating from '../ratingOptions/rating';
import Venue from '../ratingOptions/venue';
import Spice from '../ratingOptions/spiciness';
import Price from '../ratingOptions/price';
import Hangover from '../ratingOptions/hangover';
import Location from '../ratingOptions/location';

export default function Form ({ navigation }) {
  const [rating, setRating] = useState('rating');
  const [venue, setVenue] = useState('venue');
  const [spice, setSpice] = useState('spice');
  const [price, setPrice] = useState('price');
  const [hangover, setHangover] = useState('hangover');
  const [location, setLocation] = useState('location');

  const bloodyMaryRating = { rating, venue, spice, price, hangover, location };

  const handlePress = () => {
    AsyncStorage.setItem('data', JSON.stringify(bloodyMaryRating))
    .then(data => {
      navigation.navigate('MyBloodyMarys', { data: bloodyMaryRating })
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
      <Location value={location} onChange={setLocation} />
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