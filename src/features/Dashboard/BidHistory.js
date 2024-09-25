import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, List, ListItem, IconButton } from "@mui/material";
import { bidderData } from '../../components/login/data/dummyData';
import CloseIcon from '@mui/icons-material/Close';

const BidHistory = ({ open, onClose }) => {
  const [bidHistory, setBidHistory] = useState([]);

  useEffect(() => {
    if (open) {
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
          boxShadow: 24,
          p: 2,
        }}
      >
       <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", mb:2}}>
        <Typography variant="h6" component="h2">
          Bid History
        </Typography>
        <IconButton onClick={onClose}>
            <CloseIcon />
        </IconButton>
        </Box>
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