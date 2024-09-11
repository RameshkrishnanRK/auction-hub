import { Box, Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../routing/components/Layout";
import styles from "../login/login.module.scss"
const AuctioneerDashboard = () => {
    return (
        <div>
            <Layout />
      <Box>
        <Box className={styles.box}>
          <Breadcrumbs>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/auction/dashboard" style={{ textDecoration: "none" }}>
              Browse
            </Link>
            <Link style={{ textDecoration: "none" }}>Contact Us</Link>
          </Breadcrumbs>
        </Box>
      </Box>
            <h2> Auctioneer Dashboard</h2>
            <ul>
                <li>Your Auctions</li>
                <li>Payments History</li>
                <li>Saved/Draft Auctions</li>
            </ul>
        </div>
        
    );
};
export default AuctioneerDashboard;