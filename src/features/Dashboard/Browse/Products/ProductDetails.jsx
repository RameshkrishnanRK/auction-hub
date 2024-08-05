import React, { useState, useEffect, useRef, useMemo } from "react";
import Styles from "./ProductDetails.module.scss";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  TextField,
  Typography,
  Modal,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/slices/productSlice";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ReusableModal from "../../../../utils/reusableModal";
import Layout from "../../../../routing/components/Layout";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const productId = query.get("productId");

  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [openBidModal, setOpenBidModal] = useState(false);
  const [openOfferModal, setOpenOfferModal] = useState(false);

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product =
    products.length > 0 &&
    products.find((product) => product.id === parseInt(productId));

  const formattedBid = Number(product.currentBid).toLocaleString("en-IN");
  const [cleanedFormattedBid, setCleanedFormattedBid] = useState(formattedBid);
  //const [cleanedFormattedBid, setCleanedFormattedBid] = useState(formattedBid.replace(/,/g, ''));

  const [addedToWatchList, setAddedToWatchList] = useState(false);

  const cleanedFormattedBidMemo = useMemo(() => {
    setCleanedFormattedBid(formattedBid.replace(/,/g, ""));
    return formattedBid.replace(/,/g, "");
  }, [formattedBid]);

  //const cleanedFormattedBid = formattedBid && Number(formattedBid.replace(/,/g, ''));

  const [bidAmount, setBidAmount] = useState("");
  const [offerAmount, setOfferAmount] = useState("");
  const [OfferMessage, setOfferMessage] = useState("");

  const handleBidAmount = (event) => {
    setBidAmount(event.target.value);
  };

  const handleOfferAmount = (event) => {
    //console.log("event value ", event.target.value)
    setOfferAmount(event.target.value);
  };

  const handleOfferMessage = (event) => {
    //console.log("event value ", event.target.value)
    setOfferMessage(event.target.value);
  };

  const handleBidAmountSubmit = () => {
    //setCleanedFormattedBid(formattedBid)
    let formattedBidValue = Number(cleanedFormattedBid);
    let bidAmountValue = Number(bidAmount);

    if (bidAmountValue < formattedBidValue) {
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
    //setCleanedFormattedBid(formattedBid)
    setOpenOfferModal(true);
  };

  const handleAddToWatchList = () => {
    setAddedToWatchList(true);
    setTimeout(() => {
      setAddedToWatchList(false);
    }, 3000);
  };

  const handleQuickBid = () => {
    setOpenBidModal(true);
  };

  const handleBidModalSuccess = async () => {
    setOpenBidModal(false);

    // const payload = {
    //     "versionInfo": {
    //         "hasModuleVersionChanged": false,
    //         "hasApiVersionChanged": false
    //     },
    //     "data": {
    //         "Out1": "0"
    //     }
    // }

    // const url = 'https://kisl-dev.outsystemscloud.com/Auction/screenservices/Auction/MainFlow/ProductDetails/ActionAddBid';

    // try {
    //     const response = await axios.post(url, payload, {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     });
    //     console.log('response ', response)
    // } catch (error) {
    //     console.log("error ", error)
    // }

    toast.success("Your Bid has been successfully Submitted", {
      position: "top-center",
      autoClose: 2000,
      style: {
        width: "430px",
        backgroundColor: "#009933",
        color: "#ffffff",
      },
      onClose: () => {
        setTimeout(() => {
          navigate("/auction/dashboard");
        }, 1000);
      },
      transition: Slide,
    });
  };

  const handleOfferModalSuccess = async () => {
    //setOpenOfferModal(false)
    if (offerAmount.length > 0 && OfferMessage.length > 0) {
      let formattedBidValue = Number(cleanedFormattedBid);
      let offerAmountValue = Number(offerAmount);

      if (offerAmountValue < formattedBidValue) {
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
          onClose: () => {
            setTimeout(() => {
              navigate("/auction/dashboard");
            }, 1000);
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

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      event.stopPropagation();
    }
    //setOpenBidModal(false)
  };

  const handleBidModalClose = (event) => {
    setOpenBidModal(false);
  };

  const handleOfferModalClose = (event) => {
    setOpenOfferModal(false);
  };

  // const styleBid = {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     width: 400,
  //     bgcolor: 'background.paper',
  //     borderRadius :'4px',
  //     boxShadow: 24,
  //     p: 4,
  //   };

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
        {product.title}
      </Typography>
      <Typography
        id="modal-modal-description"
        sx={{ mt: 2, color: "#3C763D", fontSize: "14px", fontWeight: "bold" }}
      >
        Confirm your bid of INR {cleanedFormattedBid}
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
        {product.title}
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

  return (
    <>
      <Layout />
      <div className={Styles.ViewProductDetails}>
        <Card className={Styles.productDetailsWrapper}>
          {addedToWatchList && (
            <Alert severity="success" className={Styles.watchListAlert}>
              Added to watch list
            </Alert>
          )}
          <Box className={Styles.productMain}>
            <CardMedia
              component="img"
              height="140"
              width="100%"
              image={product.image}
              alt={product.title}
              className={Styles.productImage}
            />
            <CardContent className={Styles.productDetails}>
              <Typography
                variant="h5"
                component="div"
                className={Styles.productTitle}
              >
                {product.title}
              </Typography>
              <Divider />
              <Box className={Styles.productInfo}>
                <Box className={Styles.productInfoLeft}>
                  <Typography variant="h6" className={Styles.productPriceTitle}>
                    Current Price{" "}
                    <span className={Styles.productPrice}>₹{formattedBid}</span>
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className={Styles.quickBidBtn}
                    onClick={handleQuickBid}
                    // disabled={isExpired}
                  >
                    Quick Bid ₹{formattedBid}
                  </Button>
                  <Box className={Styles.bidSection}>
                    <TextField
                      label={`Minimum Bid ₹${formattedBid}`}
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
                      // disabled={isExpired}
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
                  <Button
                    className={Styles.buyNowBtn}
                    // disabled={isExpired}
                  >
                    Buy Now ₹520,000.00
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
                    // disabled={isExpired}
                  >
                    Make Offer
                  </Button>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={Styles.remainingTime}
                  >
                    Remaining Time <br />{" "}
                    {product.isExpired ? "Expired" : product.timeRemaining}
                  </Typography>
                </Box>
                <Box className={Styles.productInfoRight}>
                  <Box className={Styles.watchListBox}>
                    <Typography variant="body2">1Watching</Typography>
                    <Button
                      variant="outlined"
                      className={Styles.addWatchListBtn}
                      onClick={handleAddToWatchList}
                      // disabled={isExpired}
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
                        1 Bid (s)
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: "18px", fontWeight: "bold" }}
                      >
                        Bid History {">"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={Styles.productExtraInfo}>
                {/* <Box> */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ width: "125%", marginRight: "10px" }}
                >
                  KPMG will bid incrementally for you upto your maximun bid.
                  Your maximum bid is kept a secret from other users.
                </Typography>
                {/* </Box>
                            <Box> */}
                <Typography variant="body2" color="text.secondary">
                  Your bid is a contract between you and the listing creator. If
                  you have the highest bid, you will enter into a legally
                  binding purchase contract.
                </Typography>
                {/* </Box> */}
              </Box>
            </CardContent>
          </Box>
        </Card>

        {/* <Modal
                open={openBidModal}
                onClose={handleOutsideClick}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className={Styles.modalBid}
                >
                <Box ref={modalRef} sx={styleBid} className='modalBidBox'>
                    <Typography sx={{padding:'4px', backgroundColor:'#337AB7', color:'#ffffff', fontSize:'14px', fontWeight:'bold'}} id="modal-modal-title" variant="h6" component="h2">
                        {product.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, color:'#3C763D', fontSize:'14px', fontWeight:'bold' }}>
                        Confirm your bid of INR {cleanedFormattedBid}
                    </Typography>
                   
                    <Box sx={{mt:'25px',display:'flex', justifyContent:'end'}}>
                        <Button variant='outlined' onClick={handleBidModalClose}>Cancel</Button>
                        <Button className={Styles.modalButtonSuccess} style={{backgroundColor:'#3CA93A', color:'#ffffff', marginLeft:'10px'}} onClick={handleBidModalSuccess}>Submit</Button>
                    </Box>
                </Box>
            </Modal> */}

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
