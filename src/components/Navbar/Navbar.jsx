import "./Navbar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={assets?.blog_logo} alt="Logo" className="logo" />
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="navbar-links">
        <a href="/home">Home</a>
        <a href="/connections">Connections</a>
        <a href="/messages">Messages</a>
        <a onClick={() => logout()}>Logout</a>
      </div>
      <div className="navbar-profile">
        <img
          onClick={() => navigate("/profile")}
          src={userData.avatar ? userData?.avatar : assets.blog_profile}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
