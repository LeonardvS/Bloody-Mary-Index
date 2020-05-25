import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import { getBloodyMarys } from '../services/apiClient';
import FlatButton from '../shared/button';

export default function Home({ navigation }) {
  const [newLoc, setLoc] = useState([]);

  const pressHandlerMaps = () => {
    navigation.navigate('Maps', {
      loc: newLoc,
    });
  }

  const pressHandlerForm = () => {
    navigation.navigate('Form');
  }

  useEffect(() => {
    getBloodyMarys()
      .then(ratings => setLoc(ratings))
  }, []);


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
    flex: 1,
    padding: 3,
  },
  top: {
    flex: 1,
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height / 2.3,
    borderRadius: 8,
    marginBottom: 2
  },
  line: {
    borderBottomColor: 'slategrey',
    borderBottomWidth: 1,
    marginBottom: 5
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    height: Dimensions.get('window').height / 2.3,
    borderRadius: 8
  }
})


