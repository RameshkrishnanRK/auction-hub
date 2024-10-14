import React, { useEffect, useState } from "react";
import { bidderData } from "../../../components/login/data/dummyData";
import { useLocation } from "react-router-dom";
import Layout from "../../../routing/components/Layout";

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
      <Layout>
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
      </Layout>
    </div>
  );
};

export default WatchlistPage;
