// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD0OnP1LPfnoZzegT6pAmQIm_feDkGhBZg",
  authDomain: "pedallink-a0a52.firebaseapp.com",
  projectId: "pedallink-a0a52",
  storageBucket: "pedallink-a0a52.appspot.com",
  messagingSenderId: "341293835758",
  appId: "1:341293835758:web:b2e65ed658a34389c11aff",
  measurementId: "G-ZZKKRNJK17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth};