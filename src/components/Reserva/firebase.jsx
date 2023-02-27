import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzWzO1qHE4WFgczBjKXL8Rupus-WZUSic",
  authDomain: "form-iftar.firebaseapp.com",
  projectId: "form-iftar",
  storageBucket: "form-iftar.appspot.com",
  messagingSenderId: "724738892038",
  appId: "1:724738892038:web:f2c9edf6f516f1daccfe87"
});

var db = firebaseApp.firestore();

export { db }; 




