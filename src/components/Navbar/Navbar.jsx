import "./Navbar.css";
import assets from "../../assets/assets";
const Navbar = () => {
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
        <a href="/logout">Logout</a>
          </div>
          <div className="navbar-profile">
          <img src={assets.blog_profile} alt="" /></div>   
    </nav>
  );
};

export default Navbar;
