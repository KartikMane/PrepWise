import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; // ✅


const firebaseConfig = {
  apiKey: "AIzaSyB71snGoKxgzV22z4uveMctL2Ujva_Mfl4",
  authDomain: "prepwise-c56b4.firebaseapp.com",
  projectId: "prepwise-c56b4",
  storageBucket: "prepwise-c56b4.firebasestorage.app",
  messagingSenderId: "1043476966945",
  appId: "1:1043476966945:web:de034ee0cf408983d5fd60",
  measurementId: "G-YP6JFH43WQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

export const db = getFirestore(app);