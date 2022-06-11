// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxph6D9b1FoLmB90ux_1nSqTvfVxXxdg",
  authDomain: "khandaker-sajjad-hossen.firebaseapp.com",
  projectId: "khandaker-sajjad-hossen",
  storageBucket: "khandaker-sajjad-hossen.appspot.com",
  messagingSenderId: "498388835777",
  appId: "1:498388835777:web:8b7bd64951a4020c396340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth
