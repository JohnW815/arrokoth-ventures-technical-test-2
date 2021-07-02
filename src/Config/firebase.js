import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9wxZepK0UeBYpihDts-SBI09R-eX2Kqg",
    authDomain: "practice1-9136b.firebaseapp.com",
    projectId: "practice1-9136b",
    storageBucket: "practice1-9136b.appspot.com",
    messagingSenderId: "911871102872",
    appId: "1:911871102872:web:90a983a2bb8eb3358565ed",
    measurementId: "G-5DL16JCCX2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;