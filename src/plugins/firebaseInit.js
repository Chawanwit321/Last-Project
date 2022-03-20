// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDpXmZ6WAiCAteUAZUgDJfFccqkpihMJ94",
    authDomain: "mini-project-a8bc3.firebaseapp.com",
    projectId: "mini-project-a8bc3",
    storageBucket: "mini-project-a8bc3.appspot.com",
    messagingSenderId: "285529802751",
    appId: "1:285529802751:web:a442fc81720f653b5c89ca",
    measurementId: "G-82NCKS18BP"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };