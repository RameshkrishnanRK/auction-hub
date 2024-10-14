import React, { useEffect, useState } from "react";
import { auctioneerData } from "../../../components/login/data/dummyData";
import { useLocation } from "react-router-dom";
import Layout from "../../../routing/components/Layout";

const AuctionHistory = () => {
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
      <Layout>
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
      </Layout>
    </div>
  );
};

export default AuctionHistory;
