import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv7Pt4NT51L6AQvZmLxfIoINWgqJU4tKc",
  authDomain: "reacttodo-63df2.firebaseapp.com",
  databaseURL: "https://reacttodo-63df2.firebaseio.com",
  projectId: "reacttodo-63df2",
  storageBucket: "reacttodo-63df2.appspot.com",
  messagingSenderId: "962805318074",
  appId: "1:962805318074:web:de9720dae57b88baeb9d83",
  measurementId: "G-K7VVKYRN2C",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const firestore = firebase.firestore();
export const auth = firebase.auth();
