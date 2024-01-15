// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYt3icO-zKt-77VIcZrIjsPAlNpNHVVc4",
  authDomain: "personal-blog-1a2de.firebaseapp.com",
  projectId: "personal-blog-1a2de",
  storageBucket: "personal-blog-1a2de.appspot.com",
  messagingSenderId: "137658971696",
  appId: "1:137658971696:web:497d717f7d33bc5f515ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;