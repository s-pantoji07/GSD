import React, { useState, useEffect, useRef } from "react";
import "../styles/Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h2>Category</h2>
        <div className="button-container">
          <button className="view-all">View All</button>
          <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
          <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>
        </div>
      </div>

      <div className="categories-wrapper">
        <div className="categories-list" ref={scrollRef}>
          {categories.map((category, index) => (
            <div className="category-item" key={index}>
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
