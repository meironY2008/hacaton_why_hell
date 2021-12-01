// Import the functions you need from the SDKs you need
import {getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUumgQFH-BsTIdPSDIJVwt4KpelOThyiI",
  authDomain: "hacaton-98af8.firebaseapp.com",
  projectId: "hacaton-98af8",
  storageBucket: "hacaton-98af8.appspot.com",
  messagingSenderId: "1081089599196",
  appId: "1:1081089599196:web:32a319132a6eec5382f619",
  measurementId: "G-NK2VCP0ZP6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default getFirestore();