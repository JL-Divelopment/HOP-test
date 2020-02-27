import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './home';
import Settings from './settings';

const stackNavigator = createStackNavigator(
  {
    Home,
    Settings
  },
  {
    initialRouteName: 'Home',
    headerMode:'none'
  },
);

const AppNavigator = createAppContainer(stackNavigator);

export default AppNavigator;