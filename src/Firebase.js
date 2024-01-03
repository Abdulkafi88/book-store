// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByqFBliTrI8W0BlYxKkTDEOjR84aqb5v4",
  authDomain: "e-boo-ef517.firebaseapp.com",
  projectId: "e-boo-ef517",
  storageBucket: "e-boo-ef517.appspot.com",
  messagingSenderId: "903222531346",
  appId: "1:903222531346:web:a67aaabd18e65f7bd24fcb",
  measurementId: "G-YGBP8FX9B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default app 
export { auth, analytics, }