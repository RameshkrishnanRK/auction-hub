import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import styles from "./Browse.module.scss";
import { categories, regions } from "./data";
import ControlPanel from "./ControlPanel";
import Layout from "../../../routing/components/Layout";

const Browse = () => {
  return (
    <>
      <Layout />
      <Box className={styles.container}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Sidebar categories={categories} regions={regions} />
          </Grid>
          <Grid item xs={9}>
            <ControlPanel />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Browse;
