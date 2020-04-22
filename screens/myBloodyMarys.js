// TODO: use navigation.push() to get to individual BM pages, where we can see the all the ratings, not just icon + average. TouchableOpacity + onPress={navigation.push()}
// TODO: infinite loop when logging ratings.

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { getBloodyMarys } from '../services/apiClient';

export default function MyBloodyMarys ({ navigation }) {
  const [ratings, setRatings] = useState([]);
  const [lastAdded, setLastAdded] = useState(null);

  AsyncStorage.getItem('data')
    .then(data => {
      if (data !== lastAdded) {
        setLastAdded(data)
        setRatings((ratings) => {
          return [JSON.parse(data), ...ratings];
        })
      }
  });

  useEffect(() => {
    getBloodyMarys()
      .then(ratings => {
        setRatings(ratings);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bloody Marys</Text>
      {ratings.map((rating) => (
      <View key={rating._id}>
        {(rating.rating + rating.price + rating.hangover + rating.venue + rating.spice) >= 20
        ? <Text style={styles.icons}>🍹🍹🍹</Text>
          : (rating.rating + rating.price + rating.hangover + rating.venue + rating.spice) >= 10
          ? <Text style={styles.icons}>🍹🍹</Text>
          : <Text style={styles.icons}>🍹</Text>
      }
      </View>))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'
  },
  heading: {
    marginBottom: 10
  },
  icons: {
    marginBottom: 10
  }
});
