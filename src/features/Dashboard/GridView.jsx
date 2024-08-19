import React, { useEffect, useState } from "react";
import ProductGridView from "../../utils/ProductGridView";
import styles from "./GridView.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from "../../redux/slices/productSlice";
import { Grid } from "@mui/material";
import { categoriesData, regionsData } from "../../jsonData";
import { useLocation } from 'react-router-dom'
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Styles from '../../utils/ProductGridView.module.scss'
import house from "../../assets/images/house.jpg"
import car from "../../assets/images/car.jpg"
import laptop from "../../assets/images/laptop.jpg"

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const GridView = ({subCatData, searchTerm, status, filter, sortData }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
    
  

  const {
    data: products,
    loading: productLoading,
    error: productError,
  } = useSelector((state) => state.product);

  const getTimeValue = (timeVal) => {
    if (timeVal === "expired") return Number.MAX_SAFE_INTEGER;
    return parseInt(timeVal, 10) || Number.MAX_SAFE_INTEGER;
  };

  

useEffect(() => {
    const filtered = products
    .filter((product) => {
      const matchStatusFilter =
        (status === "active" &&
          product.status === "active" &&
          product.isExpired === false) ||
        (status === "completed" &&
          product.status === "completed" &&
          product.isExpired === true);

          
      const matchTypeSubCat =
      subCatData && subCatData.length > 0
        ? product.subCatType === subCatData || subCatData === "all"
        : true; 
    const matchTypeFilter =
      filter && filter !== "all"
        ? product.type === filter
        : true; 

      const matchTermFilter =
        product.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        searchTerm == (null || "");
      return matchStatusFilter && matchTypeFilter && matchTypeSubCat;
    })
    .sort((a, b) => {
      const timeComparison =
        getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining);
      const nameComparison = a.title.localeCompare(b.title);


      if (timeComparison === 0) {
        
        if (sortData === "title-a-to-z") {
          return a.title.localeCompare(b.title);
        } else if (sortData === "title-z-to-a") {
          return b.title.localeCompare(a.title);
        } else if (sortData === "price-lowest") {
          return a.currentBid - b.currentBid;
        } else if (sortData === "price-highest") {
          return b.currentBid - a.currentBid;
        }
      } else {
        if (sortData === "price-lowest") {
          return a.currentBid - b.currentBid;
        } else if (sortData === "price-highest") {
          return b.currentBid - a.currentBid;
        }
      }

      return sortData === "title-a-to-z" ? -timeComparison : timeComparison;
    });
    setFilteredProducts(filtered);
  }, [products, subCatData, searchTerm, status, filter, sortData]); 

  //Added for demo
  const query = useQuery();
  const title = query.get("title");
  const description = query.get("description");
  let  image =  house;
    if( title ) {
      if (title.toLowerCase().includes('car'))
        image = car
      else if (title.toLowerCase().includes('laptop'))
        image = laptop
      else
        image = house
    }


  return (
    <>
    <Grid container spacing={2}>
      {title && description &&
        (
          (
            <Grid item xs={12} sm={6} md={4}  >
              <Card className={Styles.productGridWrapper}>
                <CardMedia
                  component='img'
                  height='160'
                  width='100%'
                  image={image}
                  alt={title} />
                <CardContent>
                  <Typography variant='h6' component='div' style={{ fontSize: '15px' }} >
                    {title}
                  </Typography>
                  <Typography variant='body2' style={{ fontSize: '12px' }} >
                    {description}
                  </Typography>
                </CardContent>
                <Button
                  variant='contained'
                  className={Styles.quickBidBtn}>
                  Demo Data
                </Button>
              </Card>
            </Grid>
          ))
      }
    </Grid>
      <Grid container spacing={2}>
        {title == undefined &&        
        filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} mt={2} key={product.id}>
            <ProductGridView
              id={product.id}
              image={product.image}
              title={product.title}
              currentBid={product.currentBid}
              timeRemaining={product.timeRemaining}
              isExpired={product.isExpired}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GridView;
