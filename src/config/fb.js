import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfBgam_AOP3U866QO0r1shwplGy-jz3Xk",
  authDomain: "ashley-franklin-wellness.firebaseapp.com",
  projectId: "ashley-franklin-wellness",
  storageBucket: "ashley-franklin-wellness.appspot.com",
  messagingSenderId: "330848511456",
  appId: "1:330848511456:web:daa26e1468e4253a42f785",
  measurementId: "G-N9DQQ1F2QS",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth();
const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence);

export { app, provider, auth, db };
