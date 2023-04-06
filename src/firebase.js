import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVDdUMBqTt8cOjBVYoGNKRPgPxuv73rtM",
  authDomain: "eshop-eb8bc.firebaseapp.com",
  projectId: "eshop-eb8bc",
  storageBucket: "eshop-eb8bc.appspot.com",
  messagingSenderId: "245142180888",
  appId: "1:245142180888:web:51160f21e57ad812a95f6d",
  measurementId: "G-EZ3E06KRKX",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };