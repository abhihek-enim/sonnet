import "./Addblog.css";
import assets from "../../assets/assets";
import Dialogbox from "../Dialogbox/Dialogbox";
import { useState } from "react";
const Addblog = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="add-blog-container">
      <div className="blog-container">
        <img src={assets.blog_profile} alt="Profile" className="profile-pic" />

        <button className="blog-input" onClick={() => setDialogOpen(true)}>
          What is on your mind...
        </button>

        <Dialogbox isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />
      </div>
    </div>
  );
};

export default Addblog;
