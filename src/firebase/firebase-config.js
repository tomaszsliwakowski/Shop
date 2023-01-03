import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO0Y41emfUWmeDTGv_2X5XthwaPEpXcWs",
  authDomain: "authentication-shop-project.firebaseapp.com",
  projectId: "authentication-shop-project",
  storageBucket: "authentication-shop-project.appspot.com",
  messagingSenderId: "106452995370",
  appId: "1:106452995370:web:5125458e4bc43b0c146253",
  measurementId: "G-SJK1288K7Y",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const db2 = getFirestore(app);
