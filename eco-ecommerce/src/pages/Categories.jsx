import React, { useRef } from "react";
import "../Styles/Categories.css";

const categories = [
  { name: "Fruits & Veges", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZXRhYmxlcyUyMGFuZCUyMGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Breads & Sweets", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWR8ZW58MHx8MHx8fDA%3D" },
  { name: "Breads ", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWR8ZW58MHx8MHx8fDA%3D" },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbmtzfGVufDB8fDB8fHww" },
  { name: "Meat Products", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lYXR8ZW58MHx8MHx8fDA%3D" },
  
  { name: "Eggs", image: "https://images.unsplash.com/photo-1547919760-1a76e51458cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvaWxlZCUyMGVnZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Pastries", image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFzdHJpZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Pastries", image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFzdHJpZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Pastries", image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFzdHJpZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Pastries", image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFzdHJpZXN8ZW58MHx8MHx8fDA%3D" },
];

const Categories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

  return (
    <div className="categories-container">
  {/* Header section with category title and View All button */}
  <div className="categories-header">
    <h2>Category</h2>
    <button className="view-all">View All</button>
    
  </div>

  {/* Scrollable category list with buttons */}
  <div className="categories-wrapper">
    <button className="scroll-btn left" onClick={scrollLeft}>{"<"}</button>
    <div className="categories-list" ref={scrollRef}>
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <a href={`/products?category=${encodeURIComponent(category.name)}`}>
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </a>
        </div>
      ))}
    </div>
    <button className="scroll-btn right" onClick={scrollRight}>{">"}</button>
  </div>
</div>

  );
};

export default Categories;
