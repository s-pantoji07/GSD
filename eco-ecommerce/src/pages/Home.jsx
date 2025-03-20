import { Link } from "react-router-dom";
import "../Styles/Home.css";


const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
      <div className="content">
        <h1>
          <span className="green-text">Organic</span> Foods at your <br />
          <span className="bold-text">Doorsteps</span>
        </h1>
        <p>Dignissim massa diam elementum.</p>
        <div className="buttons">
          <button className="green-button">START SHOPPING</button>
          <button className="black-button">JOIN NOW</button>
        </div>
        <div className="stats">
          <div><strong>14k+</strong><br />PRODUCT VARIETIES</div>
          <div><strong>50k+</strong><br />HAPPY CUSTOMERS</div>
          <div><strong>10+</strong><br />STORE LOCATIONS</div>
        </div>
      </div>
      </section>

      
    </div>
  );
};

export default Home;
