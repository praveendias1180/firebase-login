import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from '../firebase.config';
import { 
    getAuth, 
    onAuthStateChanged,
    connectAuthEmulator,
    signInWithEmailAndPassword,
} from 'firebase/auth'

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

connectAuthEmulator(auth, 'http://localhost:9099')

const loginEmailPassword = async () => {

    // No UI yet.
    // const loginEmail = txtEmail.value
    // const loginPassword = txtPassword.value

    const loginEmail = 'hello@world.com' 
    const loginPassword = 'ksi$di4RSdsiodfuu#dfs#' 

    const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    console.log(userCredentials);
}

// No UI yet.
// btnLogin.addEventListener('click', loginEmailPassword)

const db = getFirestore(firebaseApp)

// Detec auth state
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log('logged in!');
    } else {
        console.log('No user');
    }
})

// No UI yet.
loginEmailPassword()