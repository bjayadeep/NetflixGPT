/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

const firebaseConfig = {
  apiKey: "AIzaSyB8jK94vX-_pY6GXYL8WroqxmTdz9Whf4I",
  authDomain: "netflixgpt-cfbcb.firebaseapp.com",
  projectId: "netflixgpt-cfbcb",
  storageBucket: "netflixgpt-cfbcb.firebasestorage.app",
  messagingSenderId: "978752855282",
  appId: "1:978752855282:web:fc739374f2125b7714046b",
  measurementId: "G-1ST38W4W0X"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
