import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default function Hangover ({value, onChange}) {

  return (
    <View style={styles.container}>
      <Picker selectedValue={value} onValueChange={(value) => onChange(value)} style={styles.picker}>
        <Picker.Item label="Hangover Cure" value="" />
        <Picker.Item label='⭐' value="1"  />
        <Picker.Item label='⭐⭐' value="2"  />
        <Picker.Item label='⭐⭐⭐' value="3"  />
        <Picker.Item label='⭐⭐⭐⭐' value="4"  />
        <Picker.Item label='⭐⭐⭐⭐⭐' value="5" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
});