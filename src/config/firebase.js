import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1vAZTFGN9ZCI-A_-2o1bT1jE6vNPZFNk",
  authDomain: "revents-ac787.firebaseapp.com",
  databaseURL: "https://revents-ac787.firebaseio.com",
  projectId: "revents-ac787",
  storageBucket: "",
  messagingSenderId: "498389247062",
  appId: "1:498389247062:web:fef8dad4c3a138a7"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
