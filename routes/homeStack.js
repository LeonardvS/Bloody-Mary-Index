import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Form from '../screens/form';
import Maps from '../screens/maps';

const screens = {
  Home: {
    screen: Home
  },
  Maps: {
    screen: Maps
  },
  Form: {
    screen: Form
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);