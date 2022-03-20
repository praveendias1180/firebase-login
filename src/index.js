import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from '../firebase.config';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

// Detec auth state
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!');
    } else {
        console.log('No user');
    }
})