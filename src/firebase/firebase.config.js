
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHC2-F0kfkfD_AZmzp5pnPBdRPObTucdo",
  authDomain: "b9a9-real-estate-rafaulgoni.firebaseapp.com",
  projectId: "b9a9-real-estate-rafaulgoni",
  storageBucket: "b9a9-real-estate-rafaulgoni.appspot.com",
  messagingSenderId: "180124403100",
  appId: "1:180124403100:web:8154825718a6335be37459"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;