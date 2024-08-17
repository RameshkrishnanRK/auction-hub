import React, { useEffect, useState } from "react";
import ProductListView from "../../utils/ProductListView";
import styles from "./ListView.module.scss";
import { useDispatch, useSelector } from "react-redux";

const ListView = ({subCatData, searchTerm, status, filter, sortData }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
console.log('filteredProducts-list',filteredProducts);
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
  //   (product) => ((status === 'active' && product.status === 'active' && product.isExpired === false) || (status === 'completed' && product.status === 'completed' && product.isExpired === true)) && (product.type === filter || filter === 'all')
  // ).sort((a,b) => getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining));;

  useEffect(() => {
    const filtered = products
  // const filteredProducts = products
    .filter((product) => {
      const matchStatusFilter =
        (status === "active" &&
          product.status === "active" &&
          product.isExpired === false) ||
        (status === "completed" &&
          product.status === "completed" &&
          product.isExpired === true);
          // console.log('matchStatusFilter', matchStatusFilter)

          // const matchTypeSubCat = product.subCatType === subCatData || subCatData === "all";
      // const matchTypeFilter = product.type === filter || filter === "all";
      const matchTypeSubCat =
      subCatData && subCatData.length > 0
        ? product.subCatType === subCatData || subCatData === "all"
        : true; // Default to true if subCatData is not provided or empty
console.log('matchTypeSubCat', matchTypeSubCat)
    const matchTypeFilter =
      filter && filter !== "all"
        ? product.type === filter
        : true; // Default to true if filter is "all" or not provided
        // console.log('matchTypeFilter', matchTypeFilter)

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
        // return sortData === 'title-a-to-z' ?
        //   a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
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
    console.log('filtered', filtered)
    setFilteredProducts(filtered);
  }, [products, subCatData, searchTerm, status, filter, sortData]);
  

  return (
    <div className={styles.listViewProducts}>
      {filteredProducts.map((product) => (
        <ProductListView
          id={product.id}
          image={product.image}
          title={product.title}
          currentBid={product.currentBid}
          timeRemaining={product.timeRemaining}
          isExpired={product.isExpired}
        />
      ))}
    </div>
  );
};

export default ListView;
