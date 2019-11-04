import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import 'firebase/database';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';

import 'dotenv';

import rootReducer from 'store/reducers/index';

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

let store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase),
        applyMiddleware(...middleware)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
