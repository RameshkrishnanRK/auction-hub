import React, { useEffect } from 'react'
import ProductGridView from '../../../../utils/ProductGridView'
import styles from './GridView.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../../redux/slices/productSlice'
import { Grid } from '@mui/material'

const GridView = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(fetchProducts());

  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {
        products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductGridView
              id={product.id}
              image={product.image}
              title={product.title}
              currentBid={product.currentBid}
              timeRemaining={product.timeRemaining}
              isExpired={product.isExpired}
            />
          </Grid>
        ))
      }
    </Grid>
    // <div className={styles.gridViewProducts}>
    //   {products.map(product => (
    //     <ProductGridView
    //       id={product.id}
    //       image={product.image} 
    //       title={product.title} 
    //       currentBid={product.currentBid} 
    //       timeRemaining={product.timeRemaining} 
    //       isExpired={ product.isExpired}
    //     />
    //   ))}
    // </div>
  )
}

export default GridView