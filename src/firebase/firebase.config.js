// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8J95xraZpQaDSx8m4T3DsHjSM8vWLBP4",
  authDomain: "mern-book-inventory-9f760.firebaseapp.com",
  projectId: "mern-book-inventory-9f760",
  storageBucket: "mern-book-inventory-9f760.appspot.com",
  messagingSenderId: "375521263006",
  appId: "1:375521263006:web:3ed45b4bc8e07b6e866a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;