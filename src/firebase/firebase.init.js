// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQgzni3b2nRfAOkvPgdwi8U31X5FU7dLA",
    authDomain: "authtentication-practice.firebaseapp.com",
    projectId: "authtentication-practice",
    storageBucket: "authtentication-practice.firebasestorage.app",
    messagingSenderId: "1035317102024",
    appId: "1:1035317102024:web:cc8fb59dbaf7f8c9a72cfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
