import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default function Spice ({ value, onChange }) {

  return (
    <View style={styles.container}>
      <Picker selectedValue={value} onValueChange={(item) => onChange(item)} >
        <Picker.Item label='SPICE' value='' />
        <Picker.Item label='⭐' value={1}  />
        <Picker.Item label='⭐⭐' value={2}  />
        <Picker.Item label='⭐⭐⭐' value={3}  />
        <Picker.Item label='⭐⭐⭐⭐' value={4}  />
        <Picker.Item label='⭐⭐⭐⭐⭐' value={5} />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
});