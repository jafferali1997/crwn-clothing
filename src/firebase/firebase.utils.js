import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTjkyOTWuWSwd-G5nEBYTMIG3Bf4iWJqs",
    authDomain: "crwn-db-e5bf5.firebaseapp.com",
    projectId: "crwn-db-e5bf5",
    storageBucket: "crwn-db-e5bf5.appspot.com",
    messagingSenderId: "80616454903",
    appId: "1:80616454903:web:c173d6bef7e87d27ba71f2",
    measurementId: "G-8ZQJQ07K22"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 

