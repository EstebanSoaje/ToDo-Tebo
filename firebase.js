
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"

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

const db = getFirestore();

const analytics = getAnalytics(app);

export const saveTask = (title, date, time, description) => {
    console.log(title, date, time, description);
    addDoc(collection(db, "tasks"), {title, date, time, description});
};