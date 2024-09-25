import React, { useEffect, useState } from "react";
import ProductGridView from "../../utils/ProductGridView";
import { useSelector } from "react-redux";
import { Grid, Pagination } from "@mui/material";
import { useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Styles from "../../utils/ProductGridView.module.scss";
import house from "../../assets/images/house.jpg";
import car from "../../assets/images/car.jpg";
import laptop from "../../assets/images/laptop.jpg";
import villa from "../../assets/images/FarmHouse.jpg";
import styles from "../Dashboard/GridView.module.scss";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const GridView = ({
  subCatData,
  subRegData,
  searchTerm,
  status,
  filter,
  sortData,
  currency,
  currencyRates,
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
      filtered = filtered.filter((product) => product.type === filter);
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

  const query = useQuery();
  const title = query.get("title");
  const price = query.get("price");
  const description = query.get("description");
  const formattedPrice = Number(price).toLocaleString("en-IN");
  let image = house;
  if (title) {
    if (title.toLowerCase().includes("car")) image = car;
    else if (title.toLowerCase().includes("laptop")) image = laptop;
    else if (title.toLowerCase().includes("villa")) image = villa;
    else image = house;
  }
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
    <>
      <Grid container spacing={2}>
        {title && description && price && (
          <Grid item xs={12} sm={6} md={4}>
            <Card className={Styles.productGridWrapper}>
              <CardMedia
                component="img"
                height="160"
                width="100%"
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontSize: "15px" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ fontSize: "15px" }}
                >
                  ₹{formattedPrice}
                </Typography>
                <Typography variant="body2" style={{ fontSize: "12px" }}>
                  {description}
                </Typography>
              </CardContent>
              <Button variant="contained" className={Styles.quickBidBtn}>
                Demo Data
              </Button>
            </Card>
          </Grid>
        )}
      </Grid>
      <Grid container>
        {currentProducts.length > 0 ? (
          title === null &&
          currentProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductGridView
                id={product.id}
                image={product.image}
                title={product.title}
                currentBid={(
                  product.currentBid * currencyRates[currency]
                ).toFixed(2)}
                currency={currency}
                timeRemaining={product.timeRemaining}
                isExpired={product.isExpired}
              />
            </Grid>
          ))
        ) : (
          <div className={styles.noResults}>Search not found</div>
        )}
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
        <Pagination
          count={Math.ceil(filteredProducts.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          style={{ marginTop: "10px", marginBottom:'20px' }}
        />
      </Grid>
    </>
  );
};

export default GridView;
