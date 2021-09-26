// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuFVLV7pcphU0etn0mgL18ibudrdO0IWo",
  authDomain: "album-store-a9616.firebaseapp.com",
  projectId: "album-store-a9616",
  storageBucket: "album-store-a9616.appspot.com",
  messagingSenderId: "167558769101",
  appId: "1:167558769101:web:6bb089630114cce969bc84",
  measurementId: "G-RGJRQ0ZY6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
