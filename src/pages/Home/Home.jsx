import Addblog from "../../components/Addblog/Addblog";
import Explore from "../../components/Explore/Explore";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <Addblog />
        <Explore />
      </div>
    </div>
  );
};

export default Home;
