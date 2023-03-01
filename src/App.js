import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import About from "./components/About";
import Aside from "./components/Aside";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import HomepageHeader from "./components/HomepageHeader";
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
      <ToastContainer position="top-right" rtl={true} />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<HomepageHeader />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
