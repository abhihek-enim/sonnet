import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signUp = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);

    // Initializing user data
    await setDoc(doc(db, "blogUsers", user.uid), {
      id: user.uid,
      blogUserName: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, I am blogging.....",
      lastSeen: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
    toast.error(
      error.code
        ? error.code.split("/")[1].split("-").join(" ").toUpperCase()
        : "SIGN-UP FAILED"
    );
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase());
  }
};
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" ").toUpperCase());
  }
};

export { signUp, login, logout, auth, db };
