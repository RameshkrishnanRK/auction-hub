import React, { useState, useEffect } from "react";
import Styles from "./ProductDetails.module.scss";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReusableModal from "../../utils/reusableModal";
import Layout from "../../routing/components/Layout";
import styles from "../Dashboard/ProductDetails.module.scss";
import BidHistory from "./BidHistory";
import {bids} from '../../components/login/data/dummyData';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductDetails = () => {
  const query = useQuery();
  const productId = query.get("productId");

  const [openBidModal, setOpenBidModal] = useState(false);
  const [openOfferModal, setOpenOfferModal] = useState(false);
  const [openBidhistoryModal, setOpenBidHistoryModal] = useState(false);

  const { data: products } = useSelector((state) => state.product);

  const { currency, currencyRates } = useSelector((state) => state.currency);
  window.history.replaceState(null, "/view");

  

  const product =
      products.length > 0 &&
      products.find((product) => product?.id === parseInt(productId));

  const currentCurrencyRate = currencyRates?.[currency] || 1;

  const formattedBid = product?.currentBid
  ? (product.currentBid* currentCurrencyRate).toLocaleString('en-IN')
  : '0.00';
  const buyNowPrice = product?.buyNow
  ?(product.buyNow* currentCurrencyRate).toLocaleString('en-IN')
  :'0.00';
 

  const [cleanedFormattedBid, setCleanedFormattedBid] = useState(product?.currentBid || 0);
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

    if (bidAmountValue === 0 || bidAmountValue < formattedBidValue) {
      toast.error("Bid Amount Cannot be lesser than Current Bid", {
        position: "top-center",
        autoClose: 3000,
        style: {
          width: "430px",
          backgroundColor: "#DC2020",
          color: "#ffffff",
        },
        transition: Slide,
      });
    } else {
      setCleanedFormattedBid(bidAmountValue);
      setOpenBidModal(true);
    }
  };

  const handleOfferAmountSubmit = () => {
    setOpenOfferModal(true);
    setCleanedFormattedBid(formattedBid.replace(/,/g, ""));
  };

  const handleAddToWatchList = () => {
    toast.success("Added to watch list", {
      position: "top-center",
      autoClose: 2000,
      style: {
        width: "430px",
        backgroundColor: "#009933",
        color: "#ffffff",
      },
      transition: Slide,
    });
  };

  const handleQuickBid = () => {
    setOpenBidModal(true);
    setCleanedFormattedBid(formattedBid.replace(/,/g, ""));
  };

  const handleBidModalSuccess = async () => {
    setOpenBidModal(false);

    toast.success("Your Bid has been successfully Submitted", {
      position: "top-center",
      autoClose: 2000,
      style: {
        width: "430px",
        backgroundColor: "#009933",
        color: "#ffffff",
      },
      transition: Slide,
    });
  };

  const handleOfferModalSuccess = async () => {
    if (offerAmount.length > 0 && OfferMessage.length > 0) {
      let formattedBidValue = Number(cleanedFormattedBid);
      let offerAmountValue = Number(offerAmount);

      if (offerAmountValue <= formattedBidValue) {
        toast.error("Bid Amount Cannot be lesser than Current Bid", {
          position: "top-center",
          autoClose: 3000,
          style: {
            width: "430px",
            backgroundColor: "#DC2020",
            color: "#ffffff",
          },
          transition: Slide,
        });
      } else if (offerAmountValue >= product.buyNow) {
        toast.error("Offer Amount Cannot exceed the Buy Now Price", {
          position: "top-center",
          autoClose: 3000,
          style: {
            width: "430px",
            backgroundColor: "#DC2020",
            color: "#ffffff",
          },
          transition: Slide,
        });
      } else {
        setCleanedFormattedBid(offerAmountValue);
        setOpenOfferModal(false);

        toast.success("Your Bid has been successfully Submitted", {
          position: "top-center",
          autoClose: 2000,
          style: {
            width: "430px",
            backgroundColor: "#009933",
            color: "#ffffff",
          },

          transition: Slide,
        });
      }
    } else {
      toast.error("Please fill all the required fields", {
        position: "top-center",
        autoClose: 1000,
        style: {
          width: "400px",
          backgroundColor: "#DC2020",
          color: "#ffffff",
        },
        transition: Slide,
      });
    }
  };

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
    toast.success("Congratulations! We will react out to you soon.", {
      position: "top-center",
      autoClose: 2000,
      style: {
        width: "430px",
        backgroundColor: "#009933",
        color: "#ffffff",
      },
      transition: Slide,
    });
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

  const handleBidHistoryClick=()=>{
    setOpenBidHistoryModal(true);
  };

  const numberOfBids = bids.length;


  return (
    <>
      <Layout />
      <Box>
        <Box className={styles.box}>
          <Breadcrumbs>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/view"style={{ textDecoration: "none" }}>Browse</Link>
          </Breadcrumbs>
        </Box>
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
              >
                {product?.title}
              </Typography>
              <Divider />
              <Box className={Styles.productInfo}>
                <Box className={Styles.productInfoLeft}>
                  <Typography variant="h6" className={Styles.productPriceTitle}>
                    Current Price{" "}
                    <span className={Styles.productPrice}>{currency} {formattedBid}</span>
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
                      : `${product?.timeRemaining} ${product?.timeRemaining > 1 ? 'Hrs' : 'Hr'}`}
                  </Typography>
                </Box>
                <Box className={Styles.productInfoRight}>
                  <Box className={Styles.watchListBox}>
                    <Typography variant="body2">1Watching</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      className={Styles.addWatchListBtn}
                      onClick={handleAddToWatchList}
                    >
                      + Add to watch list
                    </Button>
                  </Box>
                  <Box className={Styles.highBidderBox}>
                    <Typography className={Styles.highBidder}>
                      <div>High Bidder:</div> <div>Bidder</div>
                    </Typography>
                    <Box className={Styles.highBidderSecond}>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        {numberOfBids} {numberOfBids > 1 ? 'Bids' : 'Bid'}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        {/* Bid History {">"} */}
                        <Button onClick={handleBidHistoryClick} variant="contained"
                      color="primary"
                      className={Styles.addWatchListBtn} style={{ textTransform:"none"}}
                        >Show Bid History</Button>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
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
        onClose={()=>setOpenBidHistoryModal(false)}
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
