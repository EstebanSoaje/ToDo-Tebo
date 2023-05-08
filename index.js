
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejttpNpfhxtpWysE90kZfxxZBPhoPkYE",
  authDomain: "todo-crud-tebo.firebaseapp.com",
  projectId: "todo-crud-tebo",
  storageBucket: "todo-crud-tebo.appspot.com",
  messagingSenderId: "148255718023",
  appId: "1:148255718023:web:5c5b38e326534827071622",
  measurementId: "G-TQD59RP07J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
