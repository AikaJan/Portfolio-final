import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAKkrzHLsu6JNdlhMyDoDZ0Mg9Wx5z88U",
  authDomain: "aika-portfolio.firebaseapp.com",
  projectId: "aika-portfolio",
  storageBucket: "aika-portfolio.appspot.com",
  messagingSenderId: "97164737165",
  appId: "1:97164737165:web:1581bc45dddb24f82f80c4",
  measurementId: "G-YZJZYX1PFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Function to sign in with Google
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

// Function to sign up with email and password
const signup = (name, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // You can set additional user information here, e.g., display name
      const user = userCredential.user;
      return user;
    }
  );
};

// Function to sign out
const logout = () => {
  return signOut(auth);
};

export { auth, signInWithGoogle, signup, logout };
