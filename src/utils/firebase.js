/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export const auth = getAuth();