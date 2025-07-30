// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyD_UiXdXt83UUH4vS7iTbKefu4Z9Ck452Q",
  authDomain: "leofittglobal.firebaseapp.com",
  projectId: "leofittglobal",
  storageBucket: "leofittglobal.firebasestorage.app",
  messagingSenderId: "832292458289",
  appId: "1:832292458289:web:bb76d83362b6b5dc8eea10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
