import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB-EHswJqjlMn6nkT5ztBEnyoJJTM3CKME",
    authDomain: "chat-app-71d6f.firebaseapp.com",
    projectId: "chat-app-71d6f",
    storageBucket: "chat-app-71d6f.appspot.com",
    messagingSenderId: "945202733897",
    appId: "1:945202733897:web:60e07d0be5e0835baab098",
    measurementId: "G-W7GGLWPX49"
});

const db = firebaseApp.firestore();

export default db;