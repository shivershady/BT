
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDq05NmSFtoReYq0C5hiiyh5vgYOWGQ8YI",
    authDomain: "article-react.firebaseapp.com",
    projectId: "article-react",
    storageBucket: "article-react.appspot.com",
    messagingSenderId: "196999653591",
    appId: "1:196999653591:web:a501952c833093a717e892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage}