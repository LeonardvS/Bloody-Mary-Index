import React from 'react';
import { StyleSheet, View, Picker, Text } from 'react-native';

export default function Spice({ value, onChange }) {

  return (
    <View style={styles.container}>
      <Text style={styles.category}>SPICE</Text>
      <Picker selectedValue={value} onValueChange={(item) => onChange(item)} >
        <Picker.Item label='🌶' value={1} />
        <Picker.Item label='🌶🌶' value={2} />
        <Picker.Item label='🌶🌶🌶' value={3} />
        <Picker.Item label='🌶🌶🌶🌶' value={4} />
        <Picker.Item label='🌶🌶🌶🌶🌶' value={5} />
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