// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvRBc2EJpeTuMttRkWRf0bVQdu948SUBA",
  authDomain: "fir-demo-92494.firebaseapp.com",
  projectId: "fir-demo-92494",
  storageBucket: "fir-demo-92494.appspot.com",
  messagingSenderId: "496146362872",
  appId: "1:496146362872:web:556754118a64f9b84ee60d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
  users: firestore.collection("users"),
};
