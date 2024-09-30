import React, { useEffect, useState } from "react";
import ProductListView from "../../utils/ProductListView";
import styles from "./ListView.module.scss";
import { useSelector } from "react-redux";
import { Grid, Pagination } from "@mui/material";

const ListView = ({
  subCatData,
  subRegData,
  searchTerm,
  status,
  filter,
  sortData,
  currency,
  currencyRates
}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data: products } = useSelector((state) => state.product);

  const getTimeValue = (timeVal) => {
    if (timeVal === "expired") return Number.MAX_SAFE_INTEGER;
    return parseInt(timeVal, 10) || Number.MAX_SAFE_INTEGER;
  };

  useEffect(() => {
    let filtered = products;

    if (subCatData.length > 0) {
      filtered = filtered.filter((product) =>
        subCatData.includes(product.subCatType),
      );
    }

    if (subRegData.length > 0) {
      filtered = filtered.filter((product) =>
        subRegData.includes(product.subregion),
      );
    }

    if (status) {
      filtered = filtered.filter((product) => product.status === status);
    }
    if (filter && filter !== "all") {
      filtered = filtered.filter((product)=> product.type === filter);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    filtered = filtered.sort((a, b) => {
      const timeComparison =
        getTimeValue(a.timeRemaining) - getTimeValue(b.timeRemaining);

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
    setCurrentPage(1);
  }, [products, subCatData, subRegData, searchTerm, status, filter, sortData]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div className={styles.listViewProducts}>
      {currentProducts.length > 0 ? (
        currentProducts.map((product) => (
          <Grid item xs={12} key={product.id}>
            <ProductListView
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              currentBid={(product.currentBid * currencyRates[currency]).toFixed(
                2,
              )}
              currency={currency}
              timeRemaining={product.timeRemaining}
              isExpired={product.isExpired}
            />
          </Grid>
        ))
      ) : (
        <div className={styles.noResults}>Search not found</div>
      )}
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: "10px", marginBottom:'20px' }}
        />
      </Grid>
    </div>
  );
};

export default ListView;
