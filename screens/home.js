import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import FlatButton from '../shared/button';

export default function Home ( { navigation } ) {

  const pressHandlerMaps = () => {
    navigation.navigate('Maps');
  }

  const pressHandlerForm = () => {
    navigation.navigate('Form');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/map.png')} style={styles.top}>
        <FlatButton style={styles.button} text='drink' onPress={pressHandlerMaps} />
      </ImageBackground>

      <View style={styles.line}></View>

      <ImageBackground source={require('../assets/rate.png')} style={styles.bottom}>
        <FlatButton style={styles.button} text='rate' onPress={pressHandlerForm} />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  top: {
    height: Dimensions.get('window').height/2.3,
    borderRadius: 8,
    marginBottom: 2
  },
  bottom: {
    height: Dimensions.get('window').height/2.3,
    borderRadius: 8
  },
  line: {
    borderBottomColor: 'slategrey',
    borderBottomWidth: 1,
    marginBottom: 5
  }
})


