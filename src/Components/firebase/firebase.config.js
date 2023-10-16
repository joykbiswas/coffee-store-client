// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDqymokNvsGC-1bQxMjIrPdWSX7jOwqsk",
  authDomain: "coffee-store-7db25.firebaseapp.com",
  projectId: "coffee-store-7db25",
  storageBucket: "coffee-store-7db25.appspot.com",
  messagingSenderId: "93949224003",
  appId: "1:93949224003:web:1dd8eadba7fc6fd87ea0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;