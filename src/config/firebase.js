// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi3N82RJwa70gu-4WUU3Lr4J2LVP7cusc",
  authDomain: "corplpus.firebaseapp.com",
  projectId: "corplpus",
  storageBucket: "corplpus.appspot.com",
  messagingSenderId: "87113898012",
  appId: "1:87113898012:web:db6b913b492b570389a7d9",
  measurementId: "G-S15CDMGCBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
