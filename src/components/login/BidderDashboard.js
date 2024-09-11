import { Box, Breadcrumbs } from "@mui/material";
import React from "react";
import Layout from "../../routing/components/Layout";
import { Link } from "react-router-dom";
import styles from "../login/login.module.scss"


const BidderDashboard =() => {
    return (
        <div >
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
      <div marginLeft="10px">
            <h2 > Bidder Dashboard</h2>
            <ul>
                <li>Bid History</li>
                <li>Payments history</li>
                <li>Saved Bids</li>
            </ul>
            </div>
        </div>
    );
};
export default BidderDashboard;