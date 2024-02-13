// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmrjITYwbztcBLmigz4cpfBkiAHeqCDsw",
  authDomain: "gestor-despesas.firebaseapp.com",
  projectId: "gestor-despesas",
  storageBucket: "gestor-despesas.appspot.com",
  messagingSenderId: "750438476824",
  appId: "1:750438476824:web:7903e4250b751d99fc676d",
  measurementId: "G-E3RM9V6XDD",
  crossOrigin: "use-credentials" // Add this line
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// firebase login
// firebase init
// firebase deploy