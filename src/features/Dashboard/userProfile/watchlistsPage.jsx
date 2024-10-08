import React, { useEffect, useState } from "react";
import { bidderData } from "../../../components/login/data/dummyData";
import { Box, Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styles from "../../../components/login/myAccount.module.scss";

const WatchlistPage = () => {
  const location = useLocation();
  const storedRole = localStorage.getItem("role");
  const [accountData, setAccountData] = useState({});

  const role = location.state?.role || storedRole || "guest";

  useEffect(() => {
    if (role === "Bidder") {
      setAccountData(bidderData);
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
          <Link to="/watchlist" style={{ textDecoration: "none" }}>
            Watchlist
          </Link>
        </Breadcrumbs>
      </Box>

      <div style={{ paddingLeft: "55px", paddingTop: "10px" }}>
        <h2>Watchlists</h2>
        {bidderData.savedBids?.length > 0 ? (
          <ul>
            {bidderData.savedBids.map((bid, index) => (
              <li key={index}>{bid}</li>
            ))}
          </ul>
        ) : (
          <p>No watchlists available</p>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;