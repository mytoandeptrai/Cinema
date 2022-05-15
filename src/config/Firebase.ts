// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseCommonConst } from '../constants/commonConstants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: firebaseCommonConst.API_KEY,
    authDomain: firebaseCommonConst.AUTH_DOMAIN,
    projectId: firebaseCommonConst.PROJECT_ID,
    storageBucket: firebaseCommonConst.STORAGE_BUCKET,
    messagingSenderId: firebaseCommonConst.MESSAGING_SENDER_ID,
    appId: firebaseCommonConst.API_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
