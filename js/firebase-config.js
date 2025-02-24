// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZwn4uJUTztBvZa_87I5wlVcQ2Y6gmEKE",
  authDomain: "history-project-freshman.firebaseapp.com",
  databaseURL: "https://history-project-freshman-default-rtdb.firebaseio.com",
  projectId: "history-project-freshman",
  storageBucket: "history-project-freshman.firebasestorage.app",
  messagingSenderId: "1033275058528",
  appId: "1:1033275058528:web:7af703211005b1c26f5605",
  measurementId: "G-J4RM1WKB0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
