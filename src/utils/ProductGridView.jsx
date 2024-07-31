import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Styles from './ProductGridView.module.scss';

const ProductDetails = ({ image, title, currentBid, timeRemaining, isExpired }) => {
    const formattedBid = Number(currentBid).toLocaleString('en-IN');
    return (
        <Card className={Styles.productWrapper}>
            <CardMedia
                component='img'
                height='140'
                image={image}
                alt={title} />
            <CardContent>
                <Typography variant='h6' component='div'>
                    {title}
                </Typography>
                <Box className={Styles.ProductDetails}>
                    <Box className={Styles.productInfo}>
                        <Typography variant='body2'>
                        CURRENT BID
                        </Typography>
                        <Typography variant='h6' color='text.secondary'>
                        ₹{formattedBid}
                        </Typography>
                    </Box>
                    <Box className={Styles.productInfo}>
                        <Typography variant='body2'>
                        TIME REMAINING
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                        {isExpired ? 'Expired' : timeRemaining}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Button
                variant='contained'
                className={Styles.quickBidBtn}
                // disabled={isExpired}
            >
                Quick Bid ₹{formattedBid}
            </Button>
        </Card>
    )
};

export default ProductDetails