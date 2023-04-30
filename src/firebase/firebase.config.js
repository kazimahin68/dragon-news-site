// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbzaO2PGiSCldHLuWGUhyS-HY_BzirSuM",
  authDomain: "dragon-news-by-react.firebaseapp.com",
  projectId: "dragon-news-by-react",
  storageBucket: "dragon-news-by-react.appspot.com",
  messagingSenderId: "443745306305",
  appId: "1:443745306305:web:07717c92fff8e046fff640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app