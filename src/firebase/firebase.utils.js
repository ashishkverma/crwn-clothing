import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_lSw0K5RG52Fgbs-GaZzXUvdQmBLT_uY",
  authDomain: "crwn-db-61d61.firebaseapp.com",
  projectId: "crwn-db-61d61",
  storageBucket: "crwn-db-61d61.appspot.com",
  messagingSenderId: "231047109261",
  appId: "1:231047109261:web:115cbfdf8a6f96a29d20c4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
