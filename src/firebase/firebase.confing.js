// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1FDVSzin0ziJ61xZcrlB3MLdasww890U",
  authDomain: "disney-world-de3fa.firebaseapp.com",
  projectId: "disney-world-de3fa",
  storageBucket: "disney-world-de3fa.appspot.com",
  messagingSenderId: "72082496230",
  appId: "1:72082496230:web:a2789991406b6b0588b927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;