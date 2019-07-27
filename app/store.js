import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './reducers';

// import { persistStore, persistReducer } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];

// const configStore = () =>
//     new Promise(resolve => {
//         const enhancer = [applyMiddleware(...middlewares)];
//         window.devToolsExtension && enhancer.push(window.devToolsExtension());
//         let persistedReducer = null;

//         persistedReducer = persistReducer(
//             {
//                 key: 'root',
//                 storage
//             },
//             Reducer
//         );

//         const store = createStore(persistedReducer, undefined, compose(...enhancer));
//         persistStore(store, null, () => {
//             store.dispatch(refreshToken());
//             resolve(store);
//         });
//     });
// export default configStore;
export const store = createStore(Reducer, {}, applyMiddleware(ReduxThunk));