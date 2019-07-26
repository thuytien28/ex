/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// import './app/Main'

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './app/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'Login',
                options: {
                    topBar: {
                        visible: false
                    }
                }
            }
        },
        // root: {
        //     stack: {
        //         children: [
        //             {
        //                 component: {
        //                     name:'Login'
        //                 }
        //             }
        //         ]
        //     }
        // }
    });
});