 import firebase from "firebase";
 
 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLlaKVDqYwaY_4j-jaOIOygv5GyOa6PKc",
    authDomain: "todo-app-cp-79feb.firebaseapp.com",
    databaseURL: "https://todo-app-cp-79feb.firebaseio.com",
    projectId: "todo-app-cp-79feb",
    storageBucket: "todo-app-cp-79feb.appspot.com",
    messagingSenderId: "187697873884",
    appId: "1:187697873884:web:2ef5c92d0a351c276d0519",
    measurementId: "G-1XQWT59M4R"
 });

 const db = firebaseApp.firestore();

 export default db ;