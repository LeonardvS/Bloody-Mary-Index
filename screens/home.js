import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home ( { navigation }) {

  const pressHandlerMaps = () => {
    navigation.navigate('Maps');
  }

  const pressHandlerForm = () => {
    navigation.navigate('Form');
  }

  return (
    <View style={styles.container}>
      <Button title='Drink' color='red' onPress={pressHandlerMaps} />
      <Button title='Rate' color='coral' onPress={pressHandlerForm} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  }
})


