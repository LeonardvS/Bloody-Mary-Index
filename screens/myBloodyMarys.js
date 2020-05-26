// TODO: use navigation.push() to get to individual BM pages, where we can see the all the ratings, not just icon + average. TouchableOpacity + onPress={navigation.push()}

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image } from 'react-native';
import { getBloodyMarys } from '../services/apiClient';

export default function MyBloodyMarys({ navigation }) {
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

  let threeStars = <Image source={require('../assets/3stars.png')} style={styles.img1} />;
  let twoStars = <Image source={require('../assets/2stars.png')} style={styles.img1} />;
  let oneStar = <Image source={require('../assets/1star.png')} style={styles.img1} />;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Bloody Marys</Text>
      {ratings && ratings.map((rating) => (
        <View key={rating._id} style={styles.cardContainer} elevation={4}>
          {(rating.rating + rating.price + rating.hangover + rating.venue + rating.spice) >= 20
            ? <Text style={styles.icons}> {threeStars} | {rating.name} | {rating.address}</Text>
            : (rating.rating + rating.price + rating.hangover + rating.venue + rating.spice) >= 10
              ? <Text style={styles.icons}> {twoStars} | {rating.name} | {rating.address}</Text>
              : <Text style={styles.icons}> {oneStar} | {rating.name} | {rating.address}</Text>
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
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  icons: {
    marginBottom: 10,
    marginRight: 10
  },
  img1: {
    width: 50,
    height: 40,
  },
  cardContainer: {
    padding:15,
    backgroundColor:'white',
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      height: 2,
      width: 2
    },
    marginBottom: 10
  }
});
