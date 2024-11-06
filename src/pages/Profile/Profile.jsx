import "./Profile.css";
import assets from "../../assets/assets";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { hideLoader, showLoader } from "../../features/loaderSlice";
import { setUserData } from "../../features/userSlice";
import upload from "../../lib/upload";

const Profile = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevImage] = useState("");
  const dispatch = useDispatch();
  // console.log(userData);

  const profileUpdate = async (event) => {
    event.preventDefault();
    try {
      if (!prevImage && !image) {
        toast.error("Please upload profile image");
        return;
      }
      const docRef = doc(db, "blogUsers", uid);
      showLoader();
      if (image) {
        const imgUrl = await upload(image);
        setPrevImage(imgUrl);
        await updateDoc(docRef, {
          avatar: imgUrl,
          bio: bio,
          name: name,
        });
      } else {
        await updateDoc(docRef, {
          bio: bio,
          name: name,
        });
      }
      const snap = await getDoc(docRef);
      dispatch(setUserData(snap.data()));

      hideLoader();
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user) {
        showLoader();
        setUid(user.uid);
        const docRef = doc(db, "blogUsers", user.uid);
        const docSnap = await getDoc(docRef);
        // console.log(docSnap?.data());
        if (docSnap.data?.().name) {
          setName(docSnap.data().name);
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if (docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar);
        }
        hideLoader();
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="profile">
      <div className="profile-container">
        <form onSubmit={profileUpdate}>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImage(e?.target?.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : assets?.avatar_icon}
              alt=""
            />
            upload profile image
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
            required
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Write your bio"
            required
          ></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-picture"
          src={
            image
              ? URL.createObjectURL(image)
              : prevImage
              ? prevImage
              : assets.blog_profile
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
