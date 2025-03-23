import { useRef } from "react";
import "../Styles/Home.css";

const Home = () => {
  const categoriesRef = useRef(null); // Reference to Categories section

  const scrollToCategories = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

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
            <button className="green-button" onClick={scrollToCategories}>
              START SHOPPING
            </button>
            <button className="black-button">JOIN NOW</button>
          </div>
          <div className="stats">
            <div>
              <strong>14k+</strong>
              <br />
              PRODUCT VARIETIES
            </div>
            <div>
              <strong>50k+</strong>
              <br />
              HAPPY CUSTOMERS
            </div>
            <div>
              <strong>10+</strong>
              <br />
              STORE LOCATIONS
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="categories">
        {/* <h2>Shop by Categories</h2> */}
        {/* Your categories content here */}
      </section>
    </div>
  );
};

export default Home;
