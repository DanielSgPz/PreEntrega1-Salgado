import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSN2gi4ZyDGk7stv1m7D0KjWoRKD2fro",
  authDomain: "dizfrute-coder.firebaseapp.com",
  projectId: "dizfrute-coder",
  storageBucket: "dizfrute-coder.appspot.com",
  messagingSenderId: "632191280535",
  appId: "1:632191280535:web:34dc289fde1607fe2a90d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
