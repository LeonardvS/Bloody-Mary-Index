import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MyBloodyMarys from '../screens/myBloodyMarys';
import Header from '../shared/header';

const screens = {
  MyBloodyMarys: {
    screen: MyBloodyMarys,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      }
    }
  }
};

const MyBloodyMaryStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#eee' }
  }
});

export default MyBloodyMaryStack;