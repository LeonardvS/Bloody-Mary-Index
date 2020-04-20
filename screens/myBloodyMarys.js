// TODO: use navigation.push() to get to individual BM pages, where we can see the all the ratings, not just icon + average. TouchableOpacity + onPress={navigation.push()}
// TODO: infinite loop when logging ratings.

import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, TouchableOpacity } from 'react-native';

export default function MyBloodyMarys () {
  const [ratings, setRatings] = useState({});

  AsyncStorage.getItem('data')
    .then(data => setRatings(JSON.parse(data)));

  return (
    <View style={styles.container}>
      <Text>MyBloodyMarys Screen</Text>
      <Text>
        {(ratings.rating + ratings.price + ratings.hangover + ratings.venue + ratings.spice) >= 20
          ? <Image source={require('../assets/3stars.png')} />
            : (ratings.rating + ratings.price + ratings.hangover + ratings.venue + ratings.spice) >= 10
            ? <Image source={require('../assets/2stars.png')} />
            : <Image source={require('../assets/1star.png')} />
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});
