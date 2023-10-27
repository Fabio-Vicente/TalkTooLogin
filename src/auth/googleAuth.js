import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as googleSignOut,
 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRx6726MI-42Bat6wjne8RBJVFLL7OyAM",
  authDomain: "talktoologinassessement.firebaseapp.com",
  projectId: "talktoologinassessement",
  storageBucket: "talktoologinassessement.appspot.com",
  messagingSenderId: "603787416832",
  appId: "1:603787416832:web:83f5866c97d693de84cfe5",
  measurementId: "G-NPR860SLXC"
};

initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

const signIn = async () => {
  return signInWithPopup(auth, provider)
  .then((result) => {
    return result.user;
  }).catch((error) => {
    throw GoogleAuthProvider.credentialFromError(error);
  });
}

const signOut = async () => {
  googleSignOut(auth).then(() => {
    return true;
  }).catch(() => {
    return false;
  });
}

export {
  signIn,
  signOut,
}
