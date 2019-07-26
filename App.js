import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import firebase from 'firebase';

import Main from './app/Main';

export default class App extends React.PureComponent {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAaJK1yFW-X73XhMqVqieVdMAul48W20NY",
      authDomain: "instagram-417f9.firebaseapp.com",
      databaseURL: "https://instagram-417f9.firebaseio.com",
      projectId: "instagram-417f9",
      storageBucket: "",
      messagingSenderId: "292542235812",
      appId: "1:292542235812:web:48faa1a3e62c7709"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

// import {Navigation} from 'react-native-navigation';
// import {registerScreens} from './app/screens';

// registerScreens();

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'Login'
//       }
//     },
//   });
// });
