// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjTV_6OB29xKqWide0F6olcYrJ5m20ZgM",
  authDomain: "pantry-tracker-38877.firebaseapp.com",
  projectId: "pantry-tracker-38877",
  storageBucket: "pantry-tracker-38877.appspot.com",
  messagingSenderId: "218156599499",
  appId: "1:218156599499:web:3a727961c9cb6490c9334e",
  measurementId: "G-L0T6EP9P4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};