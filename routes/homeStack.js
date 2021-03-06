import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import Form from '../screens/form';
import Maps from '../screens/maps';
import Header from '../shared/header';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      }
    }
  },
  Maps: {
    screen: Maps
  },
  Form: {
    screen: Form,
    navigationOptions: {
      title: 'Rate'
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee' }
  }
});

export default HomeStack;