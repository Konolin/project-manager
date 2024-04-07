import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDifOXQ8UAbWWq_47mVyqvM0d2LWCaiywo",
    authDomain: "project-manager-92d36.firebaseapp.com",
    projectId: "project-manager-92d36",
    storageBucket: "project-manager-92d36.appspot.com",
    messagingSenderId: "495753982694",
    appId: "1:495753982694:web:d7c092f02188b995ba8127",
    measurementId: "G-VE7CCKVYJC"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db;