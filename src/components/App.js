import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Aside from "./Aside";
import HomepageHeader from "./HomepageHeader";

const App = () => {
  return (
    <div className="App">
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<HomepageHeader />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
