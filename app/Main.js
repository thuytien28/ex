import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Login from './components/auth/login';

export default class Main extends React.PureComponent {
    render() {
        return (
            <View>
                {/* <Text>
                    {'I am main'}
                </Text> */}
                <Login/>
            </View>
        )
    }
}

/** @format */
// import { Navigation } from 'react-native-navigation';
// import { Provider } from 'react-redux';
// import registerScreens from './route';
// // import { createStore, applyMiddleware } from 'redux';
// // import reducer from './reducers';
// // import ReduxThunk from 'redux-thunk';
// import Store from './store';

// // registerScreens(configStore, Provider);

// // const store = createStore(reducer, {}, applyMiddleware(ReduxThunk))
// registerScreens(Store, Provider);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: 'init',
//       },
//     },
//   });
// });
