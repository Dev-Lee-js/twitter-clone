import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAEzSBIpQOE5fQctvphOtB8Bslni6m5jTI",
    authDomain: "twitter-clone-93ade.firebaseapp.com",
    projectId: "twitter-clone-93ade",
    storageBucket: "twitter-clone-93ade.appspot.com",
    messagingSenderId: "522489420310",
    appId: "1:522489420310:web:80a9cb6e70a9b43fcfb337"
  };


firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
