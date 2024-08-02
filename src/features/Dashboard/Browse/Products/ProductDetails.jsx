import React, { useState } from 'react'
import Styles from './ProductDetails.module.scss'
import { Alert, Box, Button, Card, CardContent, CardMedia, Divider, TextField, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ProductDetails = ({ products }) => {
    const query = useQuery();
    const productId = query.get('productId');
    const product = products[productId];
    console.log('product: ', product)
    const [addedToWatchList, setAddedToWatchList] = useState(false);
    const formattedBid = Number(product.currentBid).toLocaleString('en-IN');

    const handleAddToWatchList = () => {
        setAddedToWatchList(true);
        setTimeout(() => {
            setAddedToWatchList(false);
        }, 3000);
    };

    return (
        <div className={Styles.ViewProductDetails}>
            <Card className={Styles.productDetailsWrapper}>
                {addedToWatchList && (
                    <Alert severity='success' className={Styles.watchListAlert}>
                        Added to watch list
                    </Alert>
                )}
                <Box className={Styles.productMain}>
                    <CardMedia
                        component='img'
                        height='140'
                        width='100%'
                        image={product.image}
                        alt={product.title}
                        className={Styles.productImage}
                    />
                    <CardContent className={Styles.productDetails}>
                        <Typography variant='h5' component='div' className={Styles.productTitle}>
                            {product.title}
                        </Typography>
                        <Divider />
                        <Box className={Styles.productInfo}>
                            <Box className={Styles.productInfoLeft}>
                                <Typography variant='h6'>
                                    Current Price <span className={Styles.productPrice}>₹{formattedBid}</span>
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='primary'
                                    className={Styles.quickBidBtn}
                                // disabled={isExpired}
                                >
                                    Quick Bid ₹{formattedBid}
                                </Button>
                                <Box className={Styles.bidSection}>
                                    <TextField
                                        label={`Minimum Bid ₹${formattedBid}`}
                                        variant='outlined'
                                        size='small'
                                        className={Styles.bidInput}
                                    />
                                    <Button
                                        variant='contained'
                                        color='success'
                                        className={Styles.submitBidBtn}
                                    // disabled={isExpired}
                                    >
                                        Submit Bid
                                    </Button>
                                </Box>
                                <Typography variant='body2' className={Styles.orText}>
                                    <Divider /><span>OR</span><Divider />
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='success'
                                    className={Styles.buyNowBtn}
                                // disabled={isExpired}
                                >
                                    Buy Now ₹520,000.00
                                </Button>
                                <Typography variant='body2' className={Styles.orText}>
                                    <Divider /><span>OR</span><Divider />
                                </Typography>
                                <Button
                                    variant='contained'
                                    color='success'
                                    className={Styles.makeOfferButton}
                                // disabled={isExpired}
                                >
                                    Make Offer
                                </Button>
                                <Typography variant='body2' color="text.secondary" className={Styles.remainingTime}>
                                    Remaining Time <br /> {product.isExpired ? 'Expired' : product.timeRemaining}
                                </Typography>
                            </Box>
                            <Box className={Styles.productInfoRight}>
                                <Box className={Styles.watchListBox}>
                                    <Typography variant='body2'>
                                        1Watching
                                    </Typography>
                                    <Button
                                        variant='contained'
                                        color='success'
                                        className={Styles.addWatchListBtn}
                                        onClick={handleAddToWatchList}
                                    // disabled={isExpired}
                                    >
                                        + Add to watch list
                                    </Button>
                                </Box>
                                <Box className={Styles.highBidderBox}>
                                    <Typography variant='body2'>
                                        High Bidder: Bidder
                                    </Typography>
                                    <Box>
                                        <Typography variant='body2'>
                                            1 Bid (s)
                                        </Typography>
                                        <Typography variant='body2'>
                                            Bid History {'>'}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
                <Box className={Styles.productExtraInfo}>
                    <Typography variant='body2' color="text.secondary">
                        KPMG will bid incrementally for you upto your maximun bid. Your maximum bid is kept a secret from other users.
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        Your bid is a contract between you and the listing creator. If you have the highest bid, you will enter into a legally  binding purchase contract.
                    </Typography>
                </Box>
            </Card>
        </div>
    );
}

export default ProductDetails;