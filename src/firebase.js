// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLu4AmwPqDnKBsQTXqcd1hAUs7Wpc2OYU",
  authDomain: "exam-project-d3676.firebaseapp.com",
  projectId: "exam-project-d3676",
  storageBucket: "exam-project-d3676.appspot.com",
  messagingSenderId: "843332895675",
  appId: "1:843332895675:web:f8d2991b497f0f4b14fa9e",
  measurementId: "G-DC0Q9JLRSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 