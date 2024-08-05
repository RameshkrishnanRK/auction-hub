import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "../features/Dashboard/Browse/Browse";
import Home from "../components/home/Home";
import AboutUs from "../components/aboutUs/AboutUs";
import ProductDetails from "../features/Dashboard/Browse/Products/ProductDetails";
import ContactUs from "../components/contactUs/ContactUs";
import Sell from "../components/sell/Sell";
import LoginPage from "../components/login/LoginPage";

const routes = () => {
  return (
    <Router>
      <Routes>
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
