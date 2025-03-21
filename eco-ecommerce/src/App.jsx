import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Home />
      <Categories />
      
    </div>
  );
}


function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Layout />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
