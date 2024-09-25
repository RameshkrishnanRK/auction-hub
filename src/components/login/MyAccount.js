import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { bidderData, auctioneerData, guestdata } from "../login/data/dummyData";
import Layout from "../../routing/components/Layout";
import { Box, Breadcrumbs } from "@mui/material";
import styles from "../login/myAccount.module.scss";

const MyAccount = () => {
  const location = useLocation();
  const storedRole = localStorage.getItem("role");
  const [accountData, setAccountData] = useState({});

  const role = location.state?.role || storedRole || "guest";

  useEffect(() => {
    switch (role) {
      case "Bidder":
        setAccountData(bidderData);
        break;
        case "Auctioneer":
          setAccountData(auctioneerData);
          break;
          case "Guest":
            setAccountData(guestdata);
            break;
          default:
            setAccountData({});
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
        {role === "Bidder" && (
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

        {role === "Auctioneer" && (
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
        {role === 'Guest' && (
          <p>Welcome, Guest! you have no account data available.</p>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
