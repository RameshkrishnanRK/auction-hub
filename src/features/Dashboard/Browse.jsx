import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from "./Browse.module.scss";
import { categoriesData, productsData, regionsData } from "../../jsonData";
import ControlPanel from "./ControlPanel";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchSideBarStart,
  fetchSideBarFailure,
  fetchSideBarSuccess,
} from "../../redux/slices/sideBarCategorySlice";
import {
  fetchSideBarRegionsStart,
  fetchSideBarRegionsFailure,
  fetchSideBarRegionsSuccess,
} from "../../redux/slices/sideBarRegionSlice";
import Layout from "../../routing/components/Layout";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subCatData, setSubCatData] = useState([]);
  const [subRegData, setSubRegData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchCategories = () => {
      dispatch(fetchSideBarStart());
      try {
        //api call
        const data = categoriesData;
        dispatch(fetchSideBarSuccess(data));
      } catch (error) {
        dispatch(fetchSideBarFailure());
      }
    };

    const fetchRegions = () => {
      dispatch(fetchSideBarRegionsStart());
      try {
        //api call
        const data = regionsData;
        dispatch(fetchSideBarRegionsSuccess(data));
      } catch (error) {
        dispatch(fetchSideBarRegionsFailure());
      }
    };

    fetchCategories();
    fetchRegions();
  }, [dispatch, searchTerm]);

  return (
    <>
      <Layout setSearchTerm={setSearchTerm}>
        <Box className={styles.container}>
          <Box className={styles.breadcrumbs}>
            <Breadcrumbs className={styles.breadcrumb} arial-label="breadcrumb">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link style={{ textDecoration: "none" }}>Browse</Link>
            </Breadcrumbs>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Sidebar  setSubCatData={setSubCatData}  setSubRegData={setSubRegData}/>
            </Grid>
            <Grid item xs={9}>
              <ControlPanel searchTerm={searchTerm} subCatData={subCatData} subRegData={subRegData} products={filteredProducts} setFilteredProducts={setFilteredProducts}/>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Browse;
