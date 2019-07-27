import { Navigation } from 'react-native-navigation';

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

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        { 
          component: {
            name: 'Home',
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


