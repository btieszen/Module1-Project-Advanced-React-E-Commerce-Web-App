
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_kuVUkarASVyt7BxnNay-EUhoXTgGaRk",
  authDomain: "final-7bc12.firebaseapp.com",
  projectId: "final-7bc12",
  storageBucket: "final-7bc12.firebasestorage.app",
  messagingSenderId: "125449983429",
  appId: "1:125449983429:web:4054329f96ae80a7bb67ac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);