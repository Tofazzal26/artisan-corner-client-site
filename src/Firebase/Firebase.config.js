// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbToGVhlQBy9sUE-gf73NlFW95r9MueTI",
  authDomain: "artisan-corner-832b4.firebaseapp.com",
  projectId: "artisan-corner-832b4",
  storageBucket: "artisan-corner-832b4.appspot.com",
  messagingSenderId: "957265078910",
  appId: "1:957265078910:web:f80a145d7662ddeee7462f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
