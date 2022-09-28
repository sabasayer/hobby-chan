import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdZyDFpetkkQJmFnPbys22FVyg3RETT44",
  authDomain: "hobby-chan.firebaseapp.com",
  projectId: "hobby-chan",
  storageBucket: "hobby-chan.appspot.com",
  messagingSenderId: "579367781497",
  appId: "1:579367781497:web:d449c07e9b7b04b19500a8",
  measurementId: "G-4NJZCJT2F8",
};

export const app = initializeApp(firebaseConfig);
