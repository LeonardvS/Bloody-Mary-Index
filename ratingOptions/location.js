import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';

export default function Rating ({ value, onChange }) {

  return (
    <View style={styles.container}>
      <Picker selectedValue={value} onValueChange={(value) => onChange(value)}>
        <Picker.Item label='ADDRESS' value='' />
        <Picker.Item label='Baden-Baden' value='Baden-Baden' />
        <Picker.Item label='MWP' value='MWP' />
        <Picker.Item label='Dietramszell' value='Dietramszell' />
        <Picker.Item label='Munich' value='Munich' />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
});