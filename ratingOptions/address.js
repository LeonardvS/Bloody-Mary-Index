import React from 'react';
import { StyleSheet, View, Picker, Text } from 'react-native';

export default function Hangover({ value, onChange }) {

  return (
    <View style={styles.container}>
      <Text style={styles.category}>ADDRESS</Text>
      <Picker selectedValue={value} onValueChange={(value) => onChange(value)}>
        <Picker.Item label="📍" value="" />
        <Picker.Item
          label='Address'
          value='Googleplex, 1600 Amphitheatre Pkwy, Mountain View'
        />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  category: {
    fontWeight: 'bold',
    fontSize: 16
  }
});