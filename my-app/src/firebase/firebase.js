import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAspAXBWb7FjV-XpCEU67WgnHE9OiiElKo',
  authDomain: 'burger-queen-fe23b.firebaseapp.com',
  projectId: 'burger-queen-fe23b',
  storageBucket: 'burger-queen-fe23b.appspot.com',
  messagingSenderId: '581378632923',
  appId: '1:581378632923:web:a559dc2f3bf2e473c230fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { auth, app, db };
