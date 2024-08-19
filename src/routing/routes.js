import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import AboutUs from "../components/aboutUs/AboutUs";
import ContactUs from "../components/contactUs/ContactUs";
import Sell from "../components/sell/Sell";
import LoginPage from "../components/login/LoginPage";
import ProductDetails from "../features/Dashboard/ProductDetails";
import Browse from "../features/Dashboard/Browse";

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auction/home" element={<Home />} />
        <Route path="/auction/login" element={<LoginPage />} />
        <Route path="/auction/dashboard" element={<Browse />} />
        <Route path="/auction/about-us" element={<AboutUs />} />
        <Route path="/auction/product-details" element={<ProductDetails />} />
        <Route path="/auction/contact-us" element={<ContactUs />} />
        <Route path="/auction/sell" element={<Sell />} />
      </Routes>
    </Router>
  );
};

export default routes;
