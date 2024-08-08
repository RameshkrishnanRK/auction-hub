import React, { useEffect } from 'react'
import ProductGridView from '../../../../utils/ProductGridView'
import styles from './GridView.module.scss'
import { useDispatch, useSelector } from 'react-redux'
//import { fetchProductsFailure, fetchProductsStart, fetchProductsSuccess } from '../../../../redux/slices/productSlice'
import { Grid } from '@mui/material'
//import { productsData } from '../data'



const GridView = ({ status, filter, sortData }) => {
  const dispatch = useDispatch();

  //const products = useSelector((state) => state.products.products)

  const { data: products, loading: productLoading, error: productError } = useSelector((state) => state.product);

  // useEffect(() => {

  //   const fetchProducts = () => {
  //     dispatch(fetchProductsStart());
  //     try {
  //       //api call
  //       const data = productsData
  //       console.log("data: products ", data)
  //       dispatch(fetchProductsSuccess(data));
  //     } catch (error) {
  //       console.log("data: products error ", error)
  //       dispatch(fetchProductsFailure());
  //     }
  //   }

  //   fetchProducts();
  // }, [dispatch]);

  const getTimeValue = (timeVal) => {
    //console.log("getTimeValue ", timeVal)
    if (timeVal === 'expired') return Number.MAX_SAFE_INTEGER;
    return parseInt(timeVal, 10) || Number.MAX_SAFE_INTEGER;
  };

  // const filteredProducts = products.filter(
  //   (product) => ((status === 'active' && product.status === 'active' && product.isExpired === false) || (status === 'completed' && product.status === 'completed' && product.isExpired === true)) && (product.type === filter || filter === '')
  // ).sort((a,b) => getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining));

  const filteredProducts = products.filter(
    (product) => {
      const matchStatusFilter = (status === 'active' && product.status === 'active' && product.isExpired === false) || (status === 'completed' && product.status === 'completed' && product.isExpired === true)
      const matchTypeFilter = (product.type === filter || filter === 'all');

      return matchStatusFilter && matchTypeFilter
    }).sort((a, b) => {
      const timeComparison = getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining);
      const nameComparison = a.title.localeCompare(b.title);

      console.log("sortData ", sortData, timeComparison)

      if (timeComparison === 0) {
        // return sortData === 'title-a-to-z' ?
        //   a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        //console.log("sortData ", sortData)
        if (sortData === 'title-a-to-z') {
          console.log("in one")
          return a.title.localeCompare(b.title)
        } else if (sortData === 'title-z-to-a') {
          console.log("in two")
          return b.title.localeCompare(a.title)
        } else if (sortData === 'price-lowest') {
          console.log("in three")
          return a.currentBid - b.currentBid
        } else if (sortData === 'price-highest') {
          console.log("in four")
          return b.currentBid - a.currentBid
        }
      } else {
        if (sortData === 'price-lowest') {
          console.log("in three")
          return a.currentBid - b.currentBid
        } else if (sortData === 'price-highest') {
          console.log("in four")
          return b.currentBid - a.currentBid
        }
      }

      return sortData === 'title-a-to-z' ? -timeComparison : timeComparison;
    });

  return (<>
    {console.log("initialdata ", products)}
    <Grid container spacing={2}>
      {
        filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
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
  </>
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