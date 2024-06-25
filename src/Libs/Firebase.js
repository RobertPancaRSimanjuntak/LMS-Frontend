// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
        apiKey: "AIzaSyDmI4fkiAUL-WAQoWdR3z7xFsKs7aUK87A",
        authDomain: "lmsedunnes.firebaseapp.com",
        projectId: "lmsedunnes",
        storageBucket: "lmsedunnes.appspot.com",
        messagingSenderId: "359561038520",
        appId: "1:359561038520:web:7514f653a41750bef8824d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage };
