import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";

const signin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const accessToken = await userCredential.user.getIdToken();
    localStorage.setItem("user", JSON.stringify(accessToken));
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
const signUp = async (email,password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};


const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export { signin, signUp, signInWithGoogle, signout };
