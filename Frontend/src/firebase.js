// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAme6cRCcW9BbZly1qHQmDRGrge2gj6QlU",
  authDomain: "blueboard-project.firebaseapp.com",
  projectId: "blueboard-project",
  storageBucket: "blueboard-project.appspot.com",
  messagingSenderId: "1033344922678",
  appId: "1:1033344922678:web:4c83ac4f7bb24ca9581497",
  measurementId: "G-QB89JXLH2B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);