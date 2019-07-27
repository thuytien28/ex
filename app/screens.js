import { Navigation } from 'react-native-navigation';

import Login from './components/auth/login';
import SignUp from './components/auth/signup';
import Home from './components/home/home';
import InitScreen from './InitScreen';

export function registerScreens(Store, Provider) {

  // Navigation.registerComponent('Home', () => Home);
  // Navigation.registerComponent('Login', () => Login);
  // Navigation.registerComponent('SignUp', () => SignUp);
  Navigation.registerComponentWithRedux('InitScreen', () => InitScreen, Provider, Store);
  Navigation.registerComponentWithRedux('Login', () => Login, Provider, Store);
  Navigation.registerComponentWithRedux('SignUp', () => SignUp, Provider, Store);
  Navigation.registerComponentWithRedux('Home', () => Home, Provider, Store);
}  