import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import MyBloodyMaryStack from './myBloodyMaryStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  MyBloodyMarys: {
    screen: MyBloodyMaryStack
  }
});

export default createAppContainer(RootDrawerNavigator);