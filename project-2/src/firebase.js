import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAScvkTty10A-ow9qQPMii9gUdrTKIi-IE",
  authDomain: "nemura-5cffb.firebaseapp.com",
  projectId: "nemura-5cffb",
  storageBucket: "nemura-5cffb.appspot.com",
  messagingSenderId: "830075561927",
  appId: "1:830075561927:web:2fdd9bdae654f73a0b9be2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
