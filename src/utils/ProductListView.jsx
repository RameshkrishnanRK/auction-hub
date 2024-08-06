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

const ProductListView = ({ id, image, title, currentBid, timeRemaining, isExpired }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/auction/product-details?productId=${id}`)
    }
    const formattedBid = Number(currentBid).toLocaleString('en-IN');
    return (
        <Card className={styles.productListWrapper}>
            <CardMedia
                component="image"
                height='140'
                image={image}
                alt={title}
                className={styles.productListImage}
            />
            <CardContent className={styles.productListTitle}>
                <Typography variant='h6' component='div' onClick={handleViewDetails}>
                    <Link to="/auction/product-details">
                        {title}
                    </Link>
                </Typography>
            </CardContent>
            <Box className={styles.productListActions}>
                {isExpired ? <Button
                    variant='contained'
                    className={styles.quickBidBtn}
                    disabled={isExpired}
                >
                    Quick Bid ₹{formattedBid}
                </Button> : <Button
                    variant='contained'
                    className={styles.quickBidBtn}
                // disabled={isExpired}
                >
                    Quick Bid ₹{formattedBid}
                </Button>}

                <Typography variant='body2' color='text.secondary' className={styles.expiredText}>
                    {isExpired ? 'Expired' : timeRemaining}
                </Typography>
                <Box className={styles.productListDetails}>
                    <Typography variant='h6' color='text.secondary'>
                        ₹{formattedBid}
                    </Typography>
                    <Box className={styles.verticalDottedLine}></Box>
                    <Typography variant='body2' color='text.secondary'>
                        1 Bid(s)
                    </Typography>
                    <Button
                        variant='outlined'
                        className={styles.viewDetailsBtn}
                        onClick={handleViewDetails}
                    >
                        <Link to="/auction/product-detailss">
                            View Details {'>'}
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Card>
    )
}

export default ProductListView