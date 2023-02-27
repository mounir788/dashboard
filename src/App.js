import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import About from "./components/About";
import Aside from "./components/Aside";
import Clients from "./components/Clients";
import Services from "./components/Services";
import HomepageHeader from "./components/HomepageHeader";
import Blogs from "./components/Blogs";

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
        <Route path="/clients" element={<Clients />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default App;
