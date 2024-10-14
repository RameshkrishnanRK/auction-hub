import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import AboutUs from "../components/aboutUs/AboutUs";
import ContactUs from "../components/contactUs/ContactUs";
import Sell from "../components/sell/Sell";
import LoginPage from "../components/login/LoginPage";
import ProductDetails from "../features/Dashboard/ProductDetails";
import Browse from "../features/Dashboard/Browse";
import Register from "../components/register/Register";
import AccountPage from "../features/Dashboard/userProfile/accountPage";
import BidHistoryPage from "../features/Dashboard/userProfile/bidHistoryPage";
import AuctionHistoryPage from "../features/Dashboard/userProfile/auctionHistoryPage";
import WatchlistPage from "../features/Dashboard/userProfile/watchlistsPage";
import ProfilePage from "../components/login/ProfilePage";

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/view" element={<Browse />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/bidhistory" element={<BidHistoryPage />} />
        <Route path="/AuctionHistory" element={<AuctionHistoryPage />} />
        <Route path="/watchlists" element={<WatchlistPage />} />
      </Routes>
    </Router>
  );
};

export default routes;
