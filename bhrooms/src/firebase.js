// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-57517.firebaseapp.com",
  projectId: "mern-estate-57517",
  storageBucket: "mern-estate-57517.appspot.com",
  messagingSenderId: "1070178741264",
  appId: "1:1070178741264:web:d372fbcfdf72f488f8ee95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);