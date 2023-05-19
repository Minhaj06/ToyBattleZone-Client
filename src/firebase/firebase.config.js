// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyCiVwdQjQrwG7haJweCk7OF_yFL9YuDkts",
  //   authDomain: "toybattlezone.firebaseapp.com",
  //   projectId: "toybattlezone",
  //   storageBucket: "toybattlezone.appspot.com",
  //   messagingSenderId: "1045528839740",
  //   appId: "1:1045528839740:web:2cab53d5cb2277a2652539",
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_MESSAGING_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
