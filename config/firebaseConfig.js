// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKcT5KTgNNVkTRzEYLeqwy-4b0KQJORpo",
  authDomain: "trabalho-pi-2f683.firebaseapp.com",
  projectId: "trabalho-pi-2f683",
  storageBucket: "trabalho-pi-2f683.appspot.com",
  messagingSenderId: "85142818563",
  appId: "1:85142818563:web:4d7950924c42061842a336"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);


  const database = firebase.firestore()
  export default database