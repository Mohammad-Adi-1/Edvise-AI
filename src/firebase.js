// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBsWoHWz4ac3_pjyF2cndGE9Zl_SvVRY0",
  authDomain: "edvise-ai-af972.firebaseapp.com",
  projectId: "edvise-ai-af972",
  storageBucket: "edvise-ai-af972.appspot.com",
  messagingSenderId: "145278746192",
  appId: "1:145278746192:web:19130b2cbcb91e98509b55",
  measurementId: "G-6F70LQ1ZWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore exports
export const auth = getAuth(app);
export const db = getFirestore(app);
