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

  


  return (
    <>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
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
        ))}
      </Grid>
    </>
  );
};

export default GridView;
