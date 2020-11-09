 import firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDfOkOHVLjx75jlBoU0P7PiN6KNsaBPcr8",
    authDomain: "pirate-firegram.firebaseapp.com",
    databaseURL: "https://pirate-firegram.firebaseio.com",
    projectId: "pirate-firegram",
    storageBucket: "pirate-firegram.appspot.com",
    messagingSenderId: "325923993420",
    appId: "1:325923993420:web:8d19d16a9c2e94370981e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};