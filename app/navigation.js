import { Navigation } from 'react-native-navigation';
// import mainTabs from './components/AppNavigator/mainTabs';

// export const rootNavigatorApp = () => Navigation.setRoot({
//   root: {
//     sideMenu: {
//       center: {
//         bottomTabs: mainTabs,
//       },
//     },
//   },
// });

export const startApp = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        { 
          component: {
            name: 'Login',
            options: {
              topBar: {
                visible: false,
                drawBehind: true,
                animate: false,
              },
            },
          },
        },
      ],
    },
  },
});
export const goLogin = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        { 
          component: {
            name: 'Login',
            options: {
              topBar: {
                visible: false,
                drawBehind: true,
                animate: false,
              },
            },
          },
        },
      ],
    },
  },
});

export const goSignUp = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        { 
          component: {
            name: 'SignUp',
            options: {
              topBar: {
                visible: false,
                drawBehind: true,
                animate: false,
              },
            },
          },
        },
      ],
    },
  },
});


