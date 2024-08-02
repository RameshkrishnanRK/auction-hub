import React from 'react'
import Styles from './ProductDetails.module.scss'
import { useLocation } from 'react-router-dom';
import { CardMedia } from '@mui/material';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const ProductDetails = ({ products }) => {
    const query = useQuery();
    const productId = query.get('productId');
    const product = products[productId];
    console.log('product: ', product)

    return (
        <div className={Styles.ViewProductDetails}>
            <h1>Product Details</h1>
            <p>{product.title}</p>
            <CardMedia
                component='img'
                height='100%'
                image={product.image}
                alt={product.title} 
            />
        </div>
    );
}

export default ProductDetails;