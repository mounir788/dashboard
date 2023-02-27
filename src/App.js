import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Aside from "./components/Aside";
import HomepageHeader from "./components/HomepageHeader";
import Services from "./components/Services";
import axios from "axios";

const App = () => {
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const sliderFetch = async () => {
      let { data } = await axios.get(
        "https://el-twyan.onrender.com/api/v1/slider"
      );
      setHeader(data.data);
    };
    sliderFetch();
  }, []);
  console.log(header);
  return (
    <div className="App">
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<HomepageHeader />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;
