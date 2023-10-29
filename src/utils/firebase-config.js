// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8HY-DvEj0ESxGQQUJ43QTYWx4Q9K7Yfs",
  authDomain: "react-netflix-clone-257b5.firebaseapp.com",
  projectId: "react-netflix-clone-257b5",
  storageBucket: "react-netflix-clone-257b5.appspot.com",
  messagingSenderId: "941124426001",
  appId: "1:941124426001:web:cc389b5516fda6358d14b0",
  measurementId: "G-0YW8D0KRNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);