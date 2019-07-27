import firebase from 'react-native-firebase';

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import { store } from './store';
// import registerScreens from './route'

registerScreens(store, Provider);

// const config = {
//   apiKey: "AIzaSyAaJK1yFW-X73XhMqVqieVdMAul48W20NY",
//   authDomain: "instagram-417f9.firebaseapp.com",
//   databaseURL: "https://instagram-417f9.firebaseio.com",
//   projectId: "instagram-417f9",
//   storageBucket: "",
//   messagingSenderId: "292542235812",
//   appId: "1:292542235812:web:48faa1a3e62c7709"
// };

// firebase.initializeApp(config)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'InitScreen'
      }
    },
  });
});

