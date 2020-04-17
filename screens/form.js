import React from 'react';
import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

import FlatButton from '../shared/button';

export default function Form () {
  return (
    <ImageBackground source={require('../assets/BM.png')} style={styles.container}>
      <Text style={styles.text}>Bloody Mary Meter</Text>
      <FlatButton text={'rating'} />
      <FlatButton text={'spiciness'} />
      <FlatButton text={'strenght'} />
      <FlatButton text={'venue'} />
      <FlatButton text={'price'} />
      <FlatButton text={'aroma'} />
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
  }
});