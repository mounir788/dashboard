import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Aside from "./components/Aside";
import HomepageHeader from "./components/HomepageHeader";

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
