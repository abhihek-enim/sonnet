import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./config/firebase";
import { useDispatch } from "react-redux";
import { setUserData } from "./features/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "./components/Loader/Loader";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadUserData = async (uid) => {
    try {
      const userRef = doc(db, "blogUsers", uid);
      console.log("userref", userRef, uid);
      const userSnap = await getDoc(userRef);

      const userData = userSnap.data();
      console.log(userData);
      dispatch(setUserData(userData));

      if (userData.avatar && userData.name) {
     
        navigate("/home");
      } else {
        navigate("/profile");
      }
      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Make sure Firebase is initialized before listening for auth state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in user data", user);
        await loadUserData(user.uid); // Load user data after authentication is successful
      } else {
        navigate("/"); // Navigate to login page if no user is logged in
      }
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Loader />
    </>
  );
}

export default App;
