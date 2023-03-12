import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/home";
import About from "./components/About";
import Aside from "./components/Aside";
import Blogs from "./components/Blogs";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Services from "./components/Services";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./utils/PrivateRoutes";
import HomepageHeader from "./components/HomepageHeader";
import Cookies from "js-cookie";

const App = () => {
  localStorage.setItem("token", false);
  const token = Cookies.get("access_token");
  const [header, setHeader] = useState([]);
  const [clients, setClients] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const sliderFetch = async () => {
      let { data } = await axios.get(
        "https://test.dummydealer.com/api/v1/slider"
      );
      setHeader(data.data);
    };
    sliderFetch();
    const clientsFetch = async () => {
      let { data } = await axios.get(
        "https://test.dummydealer.com/api/v1/clients"
      );
      setClients(data.data);
    };
    clientsFetch();
    const blogsFetch = async () => {
      let { data } = await axios.get(
        "https://test.dummydealer.com/api/v1/blogs"
      );
      setBlogs(data.data);
    };
    blogsFetch();
  }, []);
  return (
    <div className="App">
      <ToastContainer position="top-right" rtl={true} />
      <Aside />
      <Routes>
        <Route element={<PrivateRoutes t={token} />}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<HomepageHeader slides={header} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients clients={clients} />} />
          <Route path="/blogs" element={<Blogs blogs={blogs} />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
