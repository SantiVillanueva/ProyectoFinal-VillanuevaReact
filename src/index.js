import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwizpf80pGQB-Z5S-2aTjj5faLkXCvKzY",
  authDomain: "msv-serigrafia.firebaseapp.com",
  databaseURL: "https://msv-serigrafia-default-rtdb.firebaseio.com",
  projectId: "msv-serigrafia",
  storageBucket: "msv-serigrafia.appspot.com",
  messagingSenderId: "533290194671",
  appId: "1:533290194671:web:0588f52e09e50294f32d1a"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
