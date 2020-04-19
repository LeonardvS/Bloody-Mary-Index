// TODO: use navigation.push() to get to individual BM pages, where we can see the all the ratings, not just icon + average. TouchableOpacity + onPress={navigation.push()}

import React, { useState } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

export default function MyBloodyMarys () {
  const [ratings, setRatings] = useState({});

  AsyncStorage.getItem('data')
    .then(data => setRatings(JSON.parse(data)));

  return (
    <View style={styles.container}>
      <Text>MyBloodyMarys Screen</Text>
      <Text>
        {(ratings.rating + ratings.price + ratings.hangover + ratings.venue + ratings.spice) >= 20
          ? 'god-like'
            : (ratings.rating + ratings.price + ratings.hangover + ratings.venue + ratings.spice) >= 10
            ? 'decent'
            : 'sucks'
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
