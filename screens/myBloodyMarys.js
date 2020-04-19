// TODO: use navigation.push() to get to individual BM pages, where we can see the all the ratings, not just icon + average

import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

export default function MyBloodyMarys () {
  const [ratings, setRatings] = useState({});

  AsyncStorage.getItem('data')
    .then(data => setRatings(JSON.parse(data)));

  return (
    <View style={styles.container}>
      <Text>MyBloodyMarys Screen</Text>
      <Text>Rating : {ratings.rating}</Text>
      <Text>Price : {ratings.price}</Text>
      <Text>Venue : {ratings.venue}</Text>
      <Text>Hangover : {ratings.hangover}</Text>
      <Text>Spice : {ratings.spice}</Text>
      <Text>Address : {ratings.location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});
