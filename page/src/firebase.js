// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKz9-PVQvbPzQW2TATZIkJunJ9P13p2XI",
  authDomain: "mobil-demo-6f777.firebaseapp.com",
  projectId: "mobil-demo-6f777",
  storageBucket: "mobil-demo-6f777.appspot.com",
  messagingSenderId: "558208484782",
  appId: "1:558208484782:web:13ccb23b5e549939f8f43f",
  measurementId: "G-WF0K70WC1N"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
isSupported().then( yes => yes ? console.log(getAnalytics(app)) : null);

export const auth = getAuth(app);