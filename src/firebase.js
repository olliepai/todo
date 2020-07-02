import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyC1gk5mGJEj9dR5eks3f-Kt3B8y61nPCwo",
    authDomain: "todo-887d6.firebaseapp.com",
    databaseURL: "https://todo-887d6.firebaseio.com",
    projectId: "todo-887d6",
    storageBucket: "todo-887d6.appspot.com",
    messagingSenderId: "648640520166",
    appId: "1:648640520166:web:05ce3ac33c7e6669860027",
    measurementId: "G-DG1CHRL78H"
});

export { firebaseConfig as firebase };
