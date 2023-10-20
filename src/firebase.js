// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCMC4OpmjIKnM4FJ6nLg84EYQwjHIErY",
  authDomain: "real-estate-a3396.firebaseapp.com",
  projectId: "real-estate-a3396",
  storageBucket: "real-estate-a3396.appspot.com",
  messagingSenderId: "75246197439",
  appId: "1:75246197439:web:237025ccd68f58c698040a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
