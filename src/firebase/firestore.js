
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, browserLocalPersistence, setPersistence } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCBUFURZ376HDnoFJkNnKzXQG-TdrWY84g",
  authDomain: "rttodo-e439e.firebaseapp.com",
  projectId: "rttodo-e439e",
  storageBucket: "rttodo-e439e.appspot.com",
  messagingSenderId: "457917763157",
  appId: "1:457917763157:web:fe02bdc9d8c61b6db9cedc",
  measurementId: "G-56R3MDXTQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
 export {
    db,
    auth,
 }

 setPersistence(auth, browserLocalPersistence)