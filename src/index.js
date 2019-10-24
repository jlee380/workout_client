import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'store/reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import 'dotenv';

// const rrfConfig = {
//     userProfile: 'users'
// };

// const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch
//     // createFirestoreInstance // <- needed if using firestore
// };

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
        <App />
        {/* </ReactReduxFirebaseProvider> */}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
