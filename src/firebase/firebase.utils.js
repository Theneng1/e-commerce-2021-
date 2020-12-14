import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBp_Tyim0WT4CLA95kJ8edwmBphPZnie48",
  authDomain: "e-commerce-e594e.firebaseapp.com",
  projectId: "e-commerce-e594e",
  storageBucket: "e-commerce-e594e.appspot.com",
  messagingSenderId: "146493612575",
  appId: "1:146493612575:web:d9214bcdbf9f986c6e2b2a",
  measurementId: "G-MWQTT01H2K",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
