import React, { useEffect, useState } from "react";
import ProductListView from "../../utils/ProductListView";
import styles from "./ListView.module.scss";
import { useSelector } from "react-redux";

const ListView = ({ subCatData, subRegData, searchTerm, status, filter, sortData }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const dispatch = useDispatch();
  const {
    data: products,
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
        const matchTypeSubReg =
            subRegData && subRegData.length > 0
              ? product.subregion === subRegData || subRegData === "all"
              : true; 
        const matchTypeFilter =
          filter && filter !== "all"
            ? product.type === filter
            : true;

        const matchTermFilter =
          product.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
          searchTerm === (null || "");
        return matchStatusFilter && matchTypeFilter && matchTypeSubCat && matchTypeSubReg &&  matchTermFilter;
      })
      .sort((a, b) => {
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
  }, [products, subCatData,subRegData, searchTerm, status, filter, sortData]);


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
