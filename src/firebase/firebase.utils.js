import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhND-Hi4g-P0s3x7UCE1DRxGxDFG-Kf78",
    authDomain: "crwn-db-2b7f0.firebaseapp.com",
    databaseURL: "https://crwn-db-2b7f0.firebaseio.com",
    projectId: "crwn-db-2b7f0",
    storageBucket: "crwn-db-2b7f0.appspot.com",
    messagingSenderId: "279030342318",
    appId: "1:279030342318:web:b7879f5b13ef1540"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;