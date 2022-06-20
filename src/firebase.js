import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvXAAV05Fkd9tYkiXaS11rYLlDNCxbEnQ",
    authDomain: "chat-room-a2450.firebaseapp.com",
    projectId: "chat-room-a2450",
    storageBucket: "chat-room-a2450.appspot.com",
    messagingSenderId: "118700662617",
    appId: "1:118700662617:web:a66ede6c874c910dd07648",
    measurementId: "G-FPL2PC21JE"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth }