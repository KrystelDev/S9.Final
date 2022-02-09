import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_3DhZ2A1tIVSK6LqOOTEJ78WO6efm21A",
  authDomain: "s9final.firebaseapp.com",
  projectId: "s9final",
  storageBucket: "s9final.appspot.com",
  messagingSenderId: "746429804437",
  appId: "1:746429804437:web:3b1badafa9cfaf9a6cd09c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
