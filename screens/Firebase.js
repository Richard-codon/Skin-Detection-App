// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBku1ADliX3NDB3c1399UCltbbsjLLZygM",
  authDomain: "buysellapp-5a1e9.firebaseapp.com",
  databaseURL: "https://buysellapp-5a1e9-default-rtdb.firebaseio.com",
  projectId: "buysellapp-5a1e9",
  storageBucket: "buysellapp-5a1e9.appspot.com",
  messagingSenderId: "35843513365",
  appId: "1:35843513365:web:aa8eeb94eab1b557e1821c",
  measurementId: "G-NVBPYXR2FN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};