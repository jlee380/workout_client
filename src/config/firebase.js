import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_AUTHENTICATION,
    authDomain: 'workout-88595.firebaseapp.com',
    databaseURL: 'https://workout-88595.firebaseio.com',
    projectId: 'workout-88595',
    storageBucket: 'workout-88595.appspot.com',
    messagingSenderId: '298658700859',
    appId: '1:298658700859:web:67b3ac1a13ba486b99061e',
    measurementId: 'G-BCZXN8TMVN'
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;
