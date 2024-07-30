// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const apiKey = process.env.REACT_APP_APIKEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_PROJECT_ID;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;
const measurementId = process.env.REACT_APP_MEASUREMENT_ID;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messagingSenderId,
//   appId: appId,
//   measurementId: measurementId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBCVGoxzuezuHzEaKwB3hcdA2RDr8xbKsY",
  authDomain: "flights-backend.firebaseapp.com",
  projectId: "flights-backend",
  storageBucket: "flights-backend.appspot.com",
  messagingSenderId: "117674948368",
  appId: "1:117674948368:web:9d9bab5e80d09e42179795",
  measurementId: "G-CQW6FSZDLM",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
const auth = firebase.auth();

export const db = getFirestore(firebaseApp);

export { auth };
