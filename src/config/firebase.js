import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCxNHpvSf2EyRWxIwxu-IiigsQD6Rt8Nfw",
  authDomain: "counselai-67528.firebaseapp.com",
  projectId: "counselai-67528",
  storageBucket: "counselai-67528.appspot.com",
  messagingSenderId: "682465491877",
  appId: "1:682465491877:web:ec4b36fb50de65ec26864c",
  measurementId: "G-DX0NMDPD8Z"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db=getFirestore(app);
export const storage=getStorage(app);