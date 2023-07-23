// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { Database, getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTdt0tKaPjx7Xx9pImOKrk1h7OVOPIRnA",
  authDomain: "expo-auth-668e3.firebaseapp.com",
  projectId: "expo-auth-668e3",
  storageBucket: "expo-auth-668e3.appspot.com",
  messagingSenderId: "432238162305",
  appId: "1:432238162305:web:cfc2ae6aa9c699d965f880",
  measurementId: "G-CWGK5CXJWH"
};

// Initialize Firebase
 


export const FIREBASE_APP   = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export  const FIREBASE_DB = getDatabase(FIREBASE_APP); 
