import React, { useEffect } from "react";
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
//import { productsData } from '../jsonData'

const GridView = ({ searchTerm, status, filter, sortData }) => {
  // const products = useSelector((state) => state.products.products)

  const {
    data: products,
    loading: productLoading,
    error: productError,
  } = useSelector((state) => state.product);

  const getTimeValue = (timeVal) => {
    if (timeVal === "expired") return Number.MAX_SAFE_INTEGER;
    return parseInt(timeVal, 10) || Number.MAX_SAFE_INTEGER;
  };

  // const filteredProducts = products.filter(
  //   (product) => ((status === 'active' && product.status === 'active' && product.isExpired === false) || (status === 'completed' && product.status === 'completed' && product.isExpired === true)) && (product.type === filter || filter === '')
  // ).sort((a,b) => getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining));

  const filteredProducts = products
    .filter((product) => {
      const matchStatusFilter =
        (status === "active" &&
          product.status === "active" &&
          product.isExpired === false) ||
        (status === "completed" &&
          product.status === "completed" &&
          product.isExpired === true);
      const matchTypeFilter = product.type === filter || filter === "all";
      const matchTermFilter =
        product.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        searchTerm == (null || "");
      return matchStatusFilter && matchTypeFilter;
    })
    .sort((a, b) => {
      const timeComparison =
        getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining);
      const nameComparison = a.title.localeCompare(b.title);

      console.log("sortData ", sortData, timeComparison);

      if (timeComparison === 0) {
        // return sortData === 'title-a-to-z' ?
        //   a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
        //console.log("sortData ", sortData)
        if (sortData === "title-a-to-z") {
          console.log("in one");
          return a.title.localeCompare(b.title);
        } else if (sortData === "title-z-to-a") {
          console.log("in two");
          return b.title.localeCompare(a.title);
        } else if (sortData === "price-lowest") {
          console.log("in three");
          return a.currentBid - b.currentBid;
        } else if (sortData === "price-highest") {
          console.log("in four");
          return b.currentBid - a.currentBid;
        }
      } else {
        if (sortData === "price-lowest") {
          console.log("in three");
          return a.currentBid - b.currentBid;
        } else if (sortData === "price-highest") {
          console.log("in four");
          return b.currentBid - a.currentBid;
        }
      }

      return sortData === "title-a-to-z" ? -timeComparison : timeComparison;
    });

  //   const filteredProducts = products.filter((product) => {
  //     const matchStatusFilter = (status === 'active' && product.status === 'active' && !product.isExpired) ||
  //         (status === 'completed' && product.status === 'completed' && product.isExpired);
  //     const matchTypeFilter = product.type === filter || filter === 'all';
  //     const matchTermFilter = product.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) || !searchTerm;

  //     const matchCategory = categoriesData.some((category) => category.name === product.category);
  //     const matchSubcategory = categoriesData.some((category) =>
  //         category.subcategories.some((subcat) => subcat.name === product.subcategory)
  //     );
  //     const matchRegion = regionsData.some((region) => region.name === product.region);
  //     const matchSubregion = regionsData.some((region) =>
  //         region.subregions.some((subreg) => subreg.name === product.subregion)
  //     );

  //     return (
  //         matchStatusFilter &&
  //         matchTypeFilter &&
  //         matchTermFilter &&
  //         matchCategory &&
  //         matchSubcategory &&
  //         matchRegion &&
  //         matchSubregion
  //     );
  // }).sort((a, b) => {
  //     const timeComparison = getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining);

  //     if (timeComparison === 0) {
  //         if (sortData === 'title-a-to-z') {
  //             return a.title.localeCompare(b.title);
  //         } else if (sortData === 'title-z-to-a') {
  //             return b.title.localeCompare(a.title);
  //         } else if (sortData === 'price-lowest') {
  //             return a.currentBid - b.currentBid;
  //         } else if (sortData === 'price-highest') {
  //             return b.currentBid - a.currentBid;
  //         }
  //     } else {
  //         if (sortData === 'price-lowest') {
  //             return a.currentBid - b.currentBid;
  //         } else if (sortData === 'price-highest') {
  //             return b.currentBid - a.currentBid;
  //         }
  //     }

  //     return sortData === 'title-a-to-z' ? -timeComparison : timeComparison;
  // });

  console.log("filteredProducts: ", filteredProducts);

  return (
    <>
      {console.log("initialdata ", products)}
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
