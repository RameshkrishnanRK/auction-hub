import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Styles from "./ProductGridView.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import currency from '../features/Dashboard/ControlPanel';

const ProductGridView = ({
  id,
  image,
  title,
  currentBid,
  timeRemaining,
  isExpired,
  currency
}) => {
  const navigate = useNavigate();

  const userData = useSelector((state) => state.login.user);

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
    <Card className={Styles.productGridWrapper}>
      <CardMedia
        component="img"
        height="140"
        width="100%"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div" onClick={handleViewDetails} fontSize="16px">
          
            {title}
         
        </Typography>
        <Box className={Styles.ProductDetails}>
          <Box className={Styles.productInfo}>
            <Typography variant="body2" style={{ fontSize: "12px" }}>
              CURRENT BID
            </Typography>
            <Typography
              variant="h6"
              color="green"
              fontWeight="bold"
              style={{ fontSize: "12px" }}
            >
              {currency} {formattedBid}
            </Typography>
          </Box>
          <Box className={Styles.productInfo}>
            <Typography variant="body2" style={{ fontSize: "12px" }}>
              TIME REMAINING
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "12px" }}
            >
              {isExpired ? "Expired" : `${timeRemaining} Hrs`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      {isExpired ? (
        <Button
          variant="contained"
          className={Styles.quickBidBtn}
          disabled={isExpired}
        >
          Quick Bid {currency} {formattedBid}
        </Button>
      ) : (
        <Button
          variant="contained"
          className={Styles.quickBidBtn}
          onClick={handleBid}
        >
          Quick Bid {currency} {formattedBid}
        </Button>
      )}
    </Card>
  );
};

export default ProductGridView;
