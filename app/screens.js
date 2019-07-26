import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  //   Navigation.registerComponent('Home', () => require('./components/home').default);
  Navigation.registerComponent('Login', () => require('./components/auth/login').default);
  Navigation.registerComponent('SignUp', () => require('./components/auth/signup').default);
}