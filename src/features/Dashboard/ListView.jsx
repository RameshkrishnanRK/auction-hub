import React, { useEffect, useState } from "react";
import ProductListView from "../../utils/ProductListView";
import styles from "./ListView.module.scss";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

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
  }, [products, subCatData, subRegData, searchTerm, status, filter, sortData]);

  return (
    <div className={styles.listViewProducts}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
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
    </div>
  );
};

export default ListView;
