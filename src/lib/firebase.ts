// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2oyEN39z29SV04jMk_2ceqSo_nMmylO4",
  authDomain: "yesiaportofolio.firebaseapp.com",
  projectId: "yesiaportofolio",
  storageBucket: "yesiaportofolio.firebasestorage.app",
  messagingSenderId: "111591565675",
  appId: "1:111591565675:web:6829e6ce52ddd7a840842e",
  measurementId: "G-PKSPDKSS78"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);