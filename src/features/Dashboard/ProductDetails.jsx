import React, { useState, useEffect } from "react";
import Styles from "./ProductDetails.module.scss";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReusableModal from "../../utils/reusableModal";
import Layout from "../../routing/components/Layout";
import styles from "../Dashboard/ProductDetails.module.scss";
import BidHistory from "./BidHistory";
import { bids } from "../../components/login/data/dummyData";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductDetails = () => {
  const query = useQuery();
  const productId = query.get("productId");

  const [openBidModal, setOpenBidModal] = useState(false);
  const [openOfferModal, setOpenOfferModal] = useState(false);
  const [openBidhistoryModal, setOpenBidHistoryModal] = useState(false);
  const [isInWatchlist, setIsInWatchList] = useState(false);
  const [highestBidder, setHighestBidder] = useState("Bidder");
  const [role, setRole] = useState("");

  const { data: products } = useSelector((state) => state.product);

  const { currency, currencyRates } = useSelector((state) => state.currency);
  window.history.replaceState(null, "/view");

  const product =
    products.length > 0 &&
    products.find((product) => product?.id === parseInt(productId));

  const currentCurrencyRate = currencyRates?.[currency] || 1;

  const formattedBid = product?.currentBid
    ? (product.currentBid * currentCurrencyRate).toLocaleString("en-IN")
    : "0.00";
  const buyNowPrice = product?.buyNow
    ? (product.buyNow * currentCurrencyRate).toLocaleString("en-IN")
    : "0.00";

  const [cleanedFormattedBid, setCleanedFormattedBid] = useState(
    product?.currentBid || 0,
  );
  const [addedToWatchList] = useState(false);

  const [bidAmount, setBidAmount] = useState("");
  const [offerAmount, setOfferAmount] = useState("");
  const [OfferMessage, setOfferMessage] = useState("");

  useEffect(() => {
    if (bidAmount) localStorage.setItem("bidAmount", bidAmount);
  }, [bidAmount]);
  const handleBidAmount = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      setBidAmount(newValue);
    }
  };
  useEffect(() => {
    const storedRole =
      localStorage.getItem("role") || sessionStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleOfferAmount = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      setOfferAmount(newValue);
    }
  };

  const handleOfferMessage = (event) => {
    setOfferMessage(event.target.value);
  };

  const handleBidAmountSubmit = () => {
    let formattedBidValue = Number(cleanedFormattedBid) || 0;
    let bidAmountValue = Number(bidAmount) || 0;
    const toastId = 'bid-toast';
  
    if (bidAmountValue === 0 || bidAmountValue < formattedBidValue) {
      if (toast.isActive(toastId)) {
        toast.update(toastId, {
          render: "Bid Amount Cannot be lesser than Current Bid",
          type: "error",
          style: {
            width: "430px",
            backgroundColor: "#DC2020",
            color: "#ffffff",
          },
          autoClose: 3000,
          transition: Slide,
        });
      } else {
        toast.error("Bid Amount Cannot be lesser than Current Bid", {
          toastId,
          position: "top-center",
          autoClose: 3000,
          style: {
            width: "430px",
            backgroundColor: "#DC2020",
            color: "#ffffff",
          },
          transition: Slide,
        });
      }
    } else {
      setCleanedFormattedBid(bidAmountValue);
      setOpenBidModal(true);
    }
  };
  

  const handleOfferAmountSubmit = () => {
    setOpenOfferModal(true);
    setCleanedFormattedBid(formattedBid.replace(/,/g, ""));
  };
  const handleQuickBid = () => {
    setOpenBidModal(true);
    setCleanedFormattedBid(formattedBid.replace(/,/g, ""));
  };
  
  const handleBidModalSuccess = async () => {
    const toastId = 'bid-toast-success';
    
    setOpenBidModal(false);
    if (toast.isActive(toastId)) {
      toast.update(toastId, {
        render: "Your Bid has been successfully Submitted",
        type: "success",
        style: {
          width: "430px",
          backgroundColor: "#009933",
          color: "#ffffff",
        },
        autoClose: 1000,
        transition: Slide,
      });
    } else {
      toast.success("Your Bid has been successfully Submitted", {
        toastId,
        position: "top-center",
        autoClose: 1000,
        style: {
          width: "430px",
          backgroundColor: "#009933",
          color: "#ffffff",
        },
        transition: Slide,
      });
    }
  };
  

  const handleOfferModalSuccess = async () => {
    const toastId = 'offer-toast';
    const showToast = (message, type, width = "430px") => {
      toast.isActive(toastId) ? toast.update(toastId, {
        render: message,
        type,
        style: { width, backgroundColor: type === "success" ? "#009933" : "#DC2020", color: "#ffffff" },
        autoClose: 3000,
        transition: Slide,
      }) : toast[type](message, {
        toastId,
        position: "top-center",
        autoClose: 3000,
        style: { width, backgroundColor: type === "success" ? "#009933" : "#DC2020", color: "#ffffff" },
        transition: Slide,
      });
    };
  
    if (offerAmount.length > 0 && OfferMessage.length > 0) {
      let formattedBidValue = Number(cleanedFormattedBid);
      let offerAmountValue = Number(offerAmount);
  
      if (offerAmountValue <= formattedBidValue) {
        showToast("Bid Amount Cannot be lesser than Current Bid", "error");
      } else if (offerAmountValue >= product.buyNow) {
        showToast("Offer Amount Cannot exceed the Buy Now Price", "error");
      } else {
        setCleanedFormattedBid(offerAmountValue);
        setOpenOfferModal(false);
        showToast("Your Bid has been successfully Submitted", "success");
      }
    } else {
      showToast("Please fill all the required fields", "error", "400px");
    }
  };
  

  useEffect(() => {
    const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);
    if (sortedBids.length > 0) {
      setHighestBidder(sortedBids[0].bidderName);
    }
  }, []);

  const handleBidModalClose = () => {
    let formattedBid;
    if (product && product?.currentBid !== undefined) {
      formattedBid = Number(product?.currentBid).toLocaleString("en-IN");

      setCleanedFormattedBid(formattedBid.replace(/,/g, ""));
      setOpenBidModal(false);
    }
  };

  const handleOfferModalClose = (event) => {
    setOpenOfferModal(false);
  };

  const handleBuyNow = () => {
    const toastId = 'buy-now-toast';
    const showToast = (message, type, width = "430px") => {
      toast.isActive(toastId) ? toast.update(toastId, {
        render: message,
        type,
        style: { width, backgroundColor: type === "success" ? "#009933" : "#DC2020", color: "#ffffff" },
        autoClose: 1000,
        transition: Slide,
      }) : toast[type](message, {
        toastId,
        position: "top-center",
        autoClose: 1000,
        style: { width, backgroundColor: type === "success" ? "#009933" : "#DC2020", color: "#ffffff" },
        transition: Slide,
      });
    };
  
    showToast("Congratulations! We will reach out to you soon.", "success");
  };
  
  const modalBidContent = (
    <Box>
      <Typography
        sx={{
          padding: "4px",
          backgroundColor: "#337AB7",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: "bold",
        }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        {product?.title}
      </Typography>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2, color: "#3C763D", fontSize: "14px", fontWeight: "bold" }}
      >
        Confirm your bid of {currency} {cleanedFormattedBid}
      </Typography>
    </Box>
  );

  const modalOfferContent = (
    <Box>
      <Typography
        sx={{
          padding: "4px",
          backgroundColor: "#337AB7",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: "bold",
        }}
        id="modal-modal-title"
        variant="h6"
        component="h2"
      >
        {product?.title}
      </Typography>
      <Box style={{ paddingTop: "10px" }}>
        <label>
          Your Offer <span style={{ color: "red" }}>*</span>{" "}
        </label>{" "}
        <br />
        <TextField
          label=""
          variant="outlined"
          size="small"
          required
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          className={Styles.bidInput}
          value={offerAmount}
          onChange={handleOfferAmount}
        />
      </Box>

      <Box style={{ paddingTop: "10px" }}>
        <label style={{ paddingTop: "20px" }}>
          Offer Message <span style={{ color: "red" }}>*</span>{" "}
        </label>
        <br />
        <TextField
          label=""
          variant="outlined"
          multiline
          rows={4}
          required
          value={OfferMessage}
          onChange={handleOfferMessage}
        />
      </Box>
    </Box>
  );

  const handleBidHistoryClick = () => {
    setOpenBidHistoryModal(true);
  };
  const handleBidHistoryClose = (highestBidder) => {
    setOpenBidHistoryModal(false);
    if (highestBidder) {
      setHighestBidder(highestBidder);
    }
  };

  const numberOfBids = bids.length;
  const handleAddToWatchList = () => {
    const message = isInWatchlist ? "Removed from watch list" : "Added to watch list";
    const backgroundColor = isInWatchlist ? "#DC2020" : "#009933";
    const toastId = 'watchlist-toast';
  
    if (toast.isActive(toastId)) {
      toast.update(toastId, {
        render: message,
        type: isInWatchlist ? "error" : "success",
        style: {
          width: "430px",
          backgroundColor,
          color: "#ffffff",
        },
        autoClose: 1000,
        transition: Slide,
      });
    } else {
      toast(message, {
        toastId,
        position: "top-center",
        autoClose: 1000,
        style: {
          width: "430px",
          backgroundColor,
          color: "#ffffff",
        },
        transition: Slide,
      });
    }
  
    setIsInWatchList(!isInWatchlist);
  };
  

  return (
    <>
      <Layout />
      <Box>
        <Box className={styles.box}></Box>
      </Box>
      <div className={Styles.ViewProductDetails}>
        <Card className={Styles.productDetailsWrapper}>
          {addedToWatchList && (
            <Alert severity="success" className={Styles.watchListAlert}>
              Added to watch list
            </Alert>
          )}
          <Box className={Styles.productMain}>
            {product && product.image && (
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={product.image}
                alt={product?.title}
                className={Styles.productImage}
              />
            )}
            <CardContent className={Styles.productDetails}>
              <Typography
                variant="h5"
                component="div"
                className={Styles.productTitle}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{product?.title}</span>
                <Button
                  variant="contained"
                  color="primary"
                  className="{styles.addWatchListBtn"
                  onClick={handleAddToWatchList}
                  style={{
                    textTransform: "none",
                    backgroundColor: isInWatchlist ? "#DC2020" : "#1976d2",
                    color: "#fff",
                  }}
                >
                  {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                </Button>
              </Typography>
              <Box className={Styles.productInfo}>
                <Box className={Styles.productInfoLeft}>
                  <Typography variant="h6" className={Styles.productPriceTitle}>
                    Current Price{" "}
                    <span className={Styles.productPrice}>
                      {currency} {formattedBid}
                    </span>
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className={Styles.quickBidBtn}
                    onClick={handleQuickBid}
                  >
                    Quick Bid {currency} {formattedBid}
                  </Button>
                  <Box className={Styles.bidSection}>
                    <TextField
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      label={`Minimum Bid ${currency} ${formattedBid}`}
                      variant="outlined"
                      size="small"
                      className={Styles.bidInput}
                      value={bidAmount}
                      onChange={handleBidAmount}
                    />

                    <Button
                      variant="contained"
                      color="success"
                      className={Styles.submitBidBtn}
                      onClick={handleBidAmountSubmit}
                    >
                      Submit Bid
                    </Button>
                  </Box>
                  <Typography variant="body2" className={Styles.orText}>
                    <hr style={{ border: "1px solid grey", width: "200" }} />
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        color: "#696969",
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      OR
                    </span>{" "}
                    <hr style={{ border: "0", borderTop: "1px solid #000" }} />
                  </Typography>
                  <Button className={Styles.buyNowBtn} onClick={handleBuyNow}>
                    Buy Now {currency} {buyNowPrice}
                  </Button>
                  <Typography variant="body2" className={Styles.orText}>
                    <hr style={{ border: "1px solid grey", width: "200" }} />
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        color: "#696969",
                        fontSize: "16px",
                        fontWeight: "bold",
                        fontStyle: "italic",
                      }}
                    >
                      OR
                    </span>{" "}
                    <hr style={{ border: "0", borderTop: "1px solid #000" }} />
                  </Typography>
                  <Button
                    className={Styles.makeOfferButton}
                    onClick={handleOfferAmountSubmit}
                  >
                    Make Offer
                  </Button>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={Styles.remainingTime}
                  >
                    Remaining Time :{" "}
                    {product?.isExpired
                      ? "Expired"
                      : `${product?.timeRemaining} ${product?.timeRemaining > 1 ? "Hrs" : "Hr"}`}
                  </Typography>
                </Box>
                {role === "Auctioneer" && (
                  <div className={Styles.productInfoRight}>
                    <Box className={Styles.highBidderBox}>
                      <Typography className={Styles.highBidder}>
                        <div style={{ marginRight: "8px" }}>High Bidder : </div>{" "}
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            {highestBidder}
                          </span>
                        </div>
                      </Typography>
                      <Box
                        className={Styles.highBidderSecond}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 2,
                        }}
                      >
                        <Typography
                          variant="body2"
                          style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {numberOfBids} {numberOfBids > 1 ? "Bids" : "Bid"}
                        </Typography>
                        <Button
                          onClick={handleBidHistoryClick}
                          variant="contained"
                          size="small"
                          className={Styles.addWatchListBtn}
                          style={{ textTransform: "none", marginTop: "0" }}
                        >
                          Show Bid History
                        </Button>
                      </Box>
                    </Box>
                  </div>
                )}
              </Box>
              <Box className={Styles.productExtraInfo}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ width: "98%", textAlign: "justify" }}
                >
                  KPMG will bid incrementally for you upto your maximun bid.
                  Your maximum bid is kept a secret from other users.
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    width: "98%",
                    paddingLeft: "25px",
                    textAlign: "justify",
                  }}
                >
                  Your bid is a contract between you and the listing creator. If
                  you have the highest bid, you will enter into a legally
                  binding purchase contract.
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        <BidHistory
          open={openBidhistoryModal}
          onClose={handleBidHistoryClose}
          currency={currency}
          currencyRates={currencyRates}
        />
        <ReusableModal
          open={openBidModal}
          onClose={handleBidModalClose}
          onSubmit={handleBidModalSuccess}
          bodyContent={modalBidContent}
        />
        <ReusableModal
          open={openOfferModal}
          onClose={handleOfferModalClose}
          onSubmit={handleOfferModalSuccess}
          bodyContent={modalOfferContent}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductDetails;
