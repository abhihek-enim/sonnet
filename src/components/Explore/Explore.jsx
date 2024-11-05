import "./Explore.css";
import assets from "../../assets/assets"; // Adjust the path to your assets

const Explore = () => {
  return (
    <div className="explore-container">
      <div className="user-info">
        <img src={assets.profile_img} alt="User" className="profile-pic" />
        <div className="user-name">John Doe</div>
      </div>
      <div className="content-section">
        <div className="image-section">
          <img src={assets.blog_logo} alt="Blog" className="blog-image" />
        </div>
        <div className="blog-description">
          <h2> Lorem ipsum dolor sit amet. </h2>
          <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, labore. Recusandae quo quisquam perferendis tenetur doloremque sint quidem incidunt a nisi ullam cupiditate porro reiciendis praesentium, sunt tempore, dicta enim ipsum libero? Deleniti quo dicta quod deserunt assumenda explicabo voluptates culpa voluptatem ex placeat cumque amet voluptate, quasi error labore veniam quibusdam sapiente consequatur rerum accusamus iste tenetur, ratione, obcaecati veritatis. At maxime minus error fugit nulla asperiores officia minima illo labore. Dolor, esse. Autem voluptas, molestias quae consequatur quia non amet cupiditate debitis facere consequuntur, reiciendis cumque in possimus suscipit hic dolores impedit dolore minus ducimus unde quibusdam. Error.
                      <br />
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima nesciunt a, obcaecati sit nobis necessitatibus facere? Nihil quidem quis ipsum voluptas at exercitationem quibusdam dolorem sequi dicta dignissimos, doloremque sit odit eius, consequatur laboriosam ducimus autem quia et voluptates iure ex ea ad vel illum. Officiis, numquam magnam quae natus cupiditate ex dolorum nostrum nobis praesentium consequuntur dolorem quisquam mollitia ducimus tenetur saepe minus facere in temporibus tempora laudantium nemo! Culpa laboriosam accusamus inventore exercitationem quaerat consequatur suscipit ullam libero ut sapiente adipisci illo tempore, laborum odio omnis eveniet impedit minus dolorem quae deserunt voluptatum accusantium esse, similique repudiandae! Et!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;

