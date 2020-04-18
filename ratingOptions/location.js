import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default function Rating ({ value, onChange }) {

  return (
    <View style={styles.container}>
      <Picker selectedValue={value} onValueChange={(value) => onChange(value)} style={styles.picker}>
        <Picker.Item label="Address" value="" />
        <Picker.Item label='coords' value="Max-Weber-Platz"  />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
});