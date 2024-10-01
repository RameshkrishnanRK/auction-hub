import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./ProductListView.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelect } from "@mui/base";
import currency from "../features/Dashboard/ControlPanel";

const ProductListView = ({
  id,
  image,
  title,
  currentBid,
  timeRemaining,
  isExpired,
  currency
}) => {
  const navigate = useNavigate();
  const userData = useSelect((state) => state.login.user);
  const handleViewDetails = () => {
    navigate(`/product-details?productId=${id}`);
  };
  const handleBid = () => {
    if (userData !== null) {
      navigate(`/product-details?productId=${id}`);
    } else {
      navigate(`/login`);
    }
  };
  const formattedBid = Number(currentBid).toLocaleString("en-IN");
  return (
    <Card className={styles.productListWrapper}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        className={styles.productListImage}
      />
      <CardContent className={styles.productListTitle}>
        <Typography variant="h6" component="div" >
            {title}
        </Typography>
      </CardContent>
      <Box className={styles.productListActions}>
        {isExpired ? (
          <Button
            variant="contained"
            className={styles.quickBidBtn}
            disabled={isExpired}
          >
            Quick Bid {currency} {formattedBid}
          </Button>
        ) : (
          <Button
            variant="contained"
            className={styles.quickBidBtn}
            onClick={handleBid}
          >
            Quick Bid {currency} {formattedBid}
          </Button>
        )}

        <Typography
          variant="body2"
          color="text.secondary"
          className={styles.expiredText}
        >
          {isExpired ? "Expired" : ` Time Remaining : ${timeRemaining} ${timeRemaining > 1 ? 'Hrs': 'Hr'}`}
        </Typography>
        <Box className={styles.productListDetails}>
          <Typography
            variant="h6"
            color="green"
            fontSize="medium"
            fontWeight="bold"
          >
            {currency}{formattedBid}
          </Typography>
          <Box className={styles.verticalDottedLine}></Box>
          <Typography variant="body2" color="text.secondary">
            1 Bid
            {/* 1 {numberOfBids > 1 ? 'Bids' : 'Bid'} */}
          </Typography>
          <Button
            variant="outlined"
            className={styles.viewDetailsBtn}
            onClick={handleViewDetails}
          >
            <Link
            to={`/product-details?productId=${id}`}
              style={{ textDecoration: "none" }}
            >
              View Details
            </Link>
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductListView;
