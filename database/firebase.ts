// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
   // stash exists for using react-native-dotenv to add api key.
   apiKey: "",
   authDomain: "progresstracker-b3082.firebaseapp.com",
   projectId: "progresstracker-b3082",
   storageBucket: "progresstracker-b3082.appspot.com",
   messagingSenderId: "719512242219",
   appId: "1:719512242219:web:c7a1b7d97a8e483c40c26e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
