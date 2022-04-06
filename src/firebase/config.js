import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvsbNpG8CvAQ74uDSms4u2ZosUUSCm2mI",
  authDomain: "jjb-firegram.firebaseapp.com",
  projectId: "jjb-firegram",
  storageBucket: "jjb-firegram.appspot.com",
  messagingSenderId: "401254198643",
  appId: "1:401254198643:web:e8cb99655b66f6a0b12906"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timeStamp};