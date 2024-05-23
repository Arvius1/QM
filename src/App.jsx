import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { navbarPages } from "./utils/pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<navbarPages.Home />} />
          <Route path="/about" element={<navbarPages.About />} />
          <Route path="/contact" element={<navbarPages.Contact />} />
          <Route path="/createform" element={<navbarPages.FormBuilder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
