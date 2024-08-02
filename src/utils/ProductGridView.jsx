import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Styles from './ProductGridView.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const ProductGridView = ({ id, image, title, currentBid, timeRemaining, isExpired }) => {
    const navigate = useNavigate();
    
    const handleViewDetails=()=>{
        navigate(`/auction/product-details?productId=${id}`)
    }
    const formattedBid = Number(currentBid).toLocaleString('en-IN');
    return (
        <Card className={Styles.productGridWrapper}>
            <CardMedia
                component='img'
                height='140'
                width='100%'
                image={image}
                alt={title} 
            />
            <CardContent>
                <Typography variant='h6' component='div' onClick={handleViewDetails}>
                <Link to="/auction/product-details">
                    {title}
                    </Link>
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

export default ProductGridView