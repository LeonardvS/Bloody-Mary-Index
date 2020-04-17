import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header ({ navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View styles={styles.header}>
      <MaterialIcons name='menu' size={35} style={styles.icon} onPress={openMenu} />
      <View>
        <Text styles={styles.headerText}></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 2
  }
});