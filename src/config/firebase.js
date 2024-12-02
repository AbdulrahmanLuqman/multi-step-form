// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNDr-Cjn57sihilPqtTtZOHHu0YZb54g0",
  authDomain: "multi-step-form-4346c.firebaseapp.com",
  projectId: "multi-step-form-4346c",
  storageBucket: "multi-step-form-4346c.firebasestorage.app",
  messagingSenderId: "598322323016",
  appId: "1:598322323016:web:e36b2188ac846c5215827d",
  measurementId: "G-N4DXE09P6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);