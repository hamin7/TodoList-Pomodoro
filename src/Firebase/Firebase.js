import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "todo-auth-10969.firebaseapp.com",
    databaseURL: "https://todo-auth-10969-default-rtdb.firebaseio.com",
    projectId: "todo-auth-10969",
    storageBucket: "todo-auth-10969.appspot.com",
    messagingSenderId: "304581241250",
    appId: "1:304581241250:web:a27c747ad07f999e98aafb",
    measurementId: "G-2CCTXH7N7V"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
