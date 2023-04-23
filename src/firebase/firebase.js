import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyB3V04tb6mW1SNlT69BDtp5391ZQnqr168",
  authDomain: "filmyverse-b1dec.firebaseapp.com",
  projectId: "filmyverse-b1dec",
  storageBucket: "filmyverse-b1dec.appspot.com",
  messagingSenderId: "1093987459964",
  appId: "1:1093987459964:web:37522752a58b6943ea3af9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
