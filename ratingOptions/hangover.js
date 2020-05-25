import React from 'react';
import { StyleSheet, View, Picker, Text } from 'react-native';

export default function Hangover({ value, onChange }) {

  return (
    <View style={styles.container}>
      <Text style={styles.category}>HANGOVER CURE</Text>
      <Picker selectedValue={value} onValueChange={(value) => onChange(value)}>
        <Picker.Item label='🚑' value={1} />
        <Picker.Item label='🚑🚑' value={2} />
        <Picker.Item label='🚑🚑🚑' value={3} />
        <Picker.Item label='🚑🚑🚑🚑' value={4} />
        <Picker.Item label='🚑🚑🚑🚑🚑' value={5} />
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