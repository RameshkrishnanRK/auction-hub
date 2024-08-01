import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "../features/Dashboard/Browse/Browse";
import Home from "../components/home/Home";
import AboutUs from "../components/aboutUs/AboutUs";
import Layout from "./components/Layout";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
