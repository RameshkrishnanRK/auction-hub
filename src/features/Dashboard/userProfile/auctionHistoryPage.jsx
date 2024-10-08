import React, { useEffect, useState } from "react";
import { auctioneerData } from "../../../components/login/data/dummyData";
import { Box, Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styles from "../../../components/login/myAccount.module.scss";

const auctionHistory = () => {
  const location = useLocation();
  const storedRole = localStorage.getItem("role");
  const [accountData, setAccountData] = useState({});

  const role = location.state?.role || storedRole || "guest";

  useEffect(() => {
    if (role === "Auctioneer") {
      setAccountData(auctioneerData);
    } else {
      setAccountData({});
    }
  }, [role]);

  return (
    <div>
      <Box className={styles.box}>
        <Breadcrumbs>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/auctionhistory" style={{ textDecoration: "none" }}>
            Auction History
          </Link>
        </Breadcrumbs>
      </Box>

      <div style={{ paddingLeft: "55px", paddingTop: "10px" }}>
        <h2>Auction History</h2>
        {auctioneerData.previousAuctions?.length > 0 ? (
          <ul>
            {auctioneerData.previousAuctions.map((auctions, index) => (
              <li key={index}>{auctions}</li>
            ))}
          </ul>
        ) : (
          <p>No auctions available</p>
        )}
      </div>
    </div>
  );
};

export default auctionHistory;