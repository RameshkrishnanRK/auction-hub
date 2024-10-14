import React, { useEffect, useState } from "react";
import { bidderData } from "../../../components/login/data/dummyData";
import { useLocation } from "react-router-dom";
import Layout from "../../../routing/components/Layout";

const BidHistoryPage = () => {
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
      <Layout>
        <div style={{ paddingLeft: "55px", paddingTop: "10px" }}>
          <h2>Bid History</h2>
          {bidderData.previousBids?.length > 0 ? (
            <ul>
              {bidderData.previousBids.map((bid, index) => (
                <li key={index}>{bid}</li>
              ))}
            </ul>
          ) : (
            <p>No bids available</p>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default BidHistoryPage;
