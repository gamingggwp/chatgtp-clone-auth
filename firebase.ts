import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyHDVAl444t-UCdekjG0qQrwqfnL2N3IM",
    authDomain: "chatgtp-clone-auth.firebaseapp.com",
    projectId: "chatgtp-clone-auth",
    storageBucket: "chatgtp-clone-auth.appspot.com",
    messagingSenderId: "87343109932",
    appId: "1:87343109932:web:71f703cd92106b7a0d7e89"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };