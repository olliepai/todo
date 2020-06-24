import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: 'AIzaSyC1gk5mGJEj9dR5eks3f-Kt3B8y61nPCwo',
    authDomain: 'todo-887d6.firebaseapp.com',
    databaseURL: 'https://todo-887d6.firebaseio.com',
    projectId: 'todo-887d6',
    storageBucket: 'todo-887d6.appspot.com',
    messagingSenderId: '648640520166',
    appId: '1:648640520166:web:c8c746f857227936860027',
    measurementId: ' G-W30W28P5E1'
})

export { firebaseConfig as firebase };
