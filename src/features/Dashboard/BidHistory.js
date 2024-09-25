import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, List, ListItem } from "@mui/material";
import { bidderData } from '../../components/login/data/dummyData';
const BidHistory = ({ open, onClose }) => {
  const [bidHistory, setBidHistory] = useState([]);

  // Fetch bid history from an API or local data (like bidderData) when the component mounts
  useEffect(() => {
    if (open) {
      // Here you can fetch from an external API if needed. For now, we'll use mock data.
      setBidHistory(bidderData.previousBids);
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Bid History
        </Typography>
        <List>
          {bidHistory.map((bid, index) => (
            <ListItem key={index}>{bid}</ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default BidHistory;