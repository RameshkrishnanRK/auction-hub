import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { bidderData, auctioneerData } from "../login/data/dummyData";
import Layout from "../../routing/components/Layout";
import { Box, Breadcrumbs } from "@mui/material";
import styles from "../login/myAccount.module.scss";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const location = useLocation();
  const storedRole = localStorage.getItem("role");
  const [accountData, setAccountData] = useState({});

  const rolesData = useSelector((state)=> state.roles);
  const role = location.state?.role || storedRole || "bidder";

  useEffect(() => {
    if (role === "bidder") {
      setAccountData(bidderData);
    } else if (role === "auctioneer") {
      setAccountData(auctioneerData);
    }
  }, [role]);

  return (
    <div>
      <Layout />
      <Box>
        <Box className={styles.box}>
          <Breadcrumbs>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link style={{ textDecoration: "none" }}>My Account</Link>
          </Breadcrumbs>
        </Box>
      </Box>

      <div  className="my-account-page" style={{ paddingLeft: "55px", paddingTop: "10px"}}>
        <h2 >My Account</h2>
        {role === "bidder" && (
          <>
            <h3 >Previous Bids</h3>
            <ul>
              {accountData.previousBids?.map((bid, index) => (
                <li key={index}>{bid}</li>
              ))}
            </ul>

            <h3>Payments Done</h3>
            <ul>
              {accountData.paymentsDone?.map((payment, index) => (
                <li key={index}>{payment}</li>
              ))}
            </ul>

            <h3>Saved Bids</h3>
            <ul>
              {accountData.savedBids?.map((savedBid, index) => (
                <li key={index}>{savedBid}</li>
              ))}
            </ul>
          </>
        )}

        {role === "auctioneer" && (
          <>
            <h3>Previous Auctions</h3>
            <ul>
              {accountData.previousAuctions?.map((auction, index) => (
                <li key={index}>{auction}</li>
              ))}
            </ul>

            <h3>Payments Received</h3>
            <ul>
              {accountData.paymentsReceived?.map((payment, index) => (
                <li key={index}>{payment}</li>
              ))}
            </ul>

            <h3>Saved Auctions</h3>
            <ul>
              {accountData.savedAuctions?.map((savedAuction, index) => (
                <li key={index}>{savedAuction}</li>
              ))}
            </ul>

            <h3>Wishlists</h3>
            <ul>
              {accountData.wishlists?.map((wishlist, index) => (
                <li key={index}>{wishlist}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
