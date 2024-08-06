import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "./Sell.module.scss";
import { categoriesData, regionsData } from "../../features/Dashboard/Browse/data";
import Layout from "../../routing/components/Layout";
const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  padding: "20px",
});

const FormSection = styled(Box)({
  marginBottom: "20px",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
});

const CustomButton = styled(Button)({
  marginTop: "20px",
  display: "block",
  marginLeft: "auto",
});

const Sell = () => {
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");
  const [listingType, setListingType] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [subCategoryList, setSubCategoryList] = React.useState([]);

  useEffect(() => {
    const selectedCategory = categoriesData.filter(
      (data) => data.name === category
    );

    setSubCategoryList(selectedCategory[0]?.subcategories);
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSubCategory(event.target.value);
  };

  const handleListingTypeChange = (event) => {
    setListingType(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <>
      <Layout />
      <MainContainer>
        <Container className={styles.mainContainer}>
          <Box className={styles.title}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h5" gutterBottom>
                  Create Listing - Step 1 of 2
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  All fields marked with "*" are required.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <FormSection mt={2} className={styles.categoryContainer}>
            <Box className={styles.title}>
              <Typography
                className={styles.typography}
                variant="body1"
                gutterBottom
              >
                Category <span>*</span>
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={4} sm={5}>
                <FormControl
                  className={styles.boxStyle}
                  fullWidth
                  margin="normal"
                >
                  <InputLabel className={styles.boxStyle}>
                    Select Category
                  </InputLabel>
                  <Select value={category} onChange={handleCategoryChange}>
                    <MenuItem value="">
                      <em>Select Category</em>
                    </MenuItem>

                    {categoriesData.map((data, index) => (
                      <MenuItem value={data.name} key={index}>
                        {data.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={5}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Select Subcategory</InputLabel>
                  <Select
                    value={subCategory}
                    onChange={handleSubCategoryChange}
                  >
                    <MenuItem value="">
                      <em>Select Subcategory</em>
                    </MenuItem>
                    {subCategoryList &&
                      subCategoryList?.length > 0 &&
                      subCategoryList.map((data, index) => (
                        <MenuItem value={data} key={index}>
                          {data}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </FormSection>

          <FormSection className={styles.categoryContainer}>
            <Box className={styles.title}>
              <Typography
                className={styles.typography}
                variant="body1"
                gutterBottom
              >
                Listing Type<span>*</span>
              </Typography>
            </Box>
            <FormControl component="fieldset" className={styles.radio}>
              <RadioGroup
                aria-label="listingType"
                name="listingType"
                value={listingType}
                onChange={handleListingTypeChange}
                className={styles.radioGroup}
              >
                <FormControlLabel
                  value="auction"
                  className={styles.radioColor}
                  control={<Radio className={styles.radioColor} />}
                  label="Auction"
                  style={{ justifyContent: "flex-start", color: "black" }}
                />
                <FormControlLabel
                  value="fixedPrice"
                  className={styles.radioColor}
                  control={<Radio className={styles.radioColor} />}
                  label="Fixed Price"
                />
                <FormControlLabel
                  value="classified"
                  className={styles.radioColor}
                  control={<Radio className={styles.radioColor} />}
                  label="Classified"
                />
              </RadioGroup>
            </FormControl>
          </FormSection>

          <FormSection className={styles.categoryContainer}>
            <Box className={styles.title}>
              <Typography
                className={styles.typography}
                variant="body1"
                gutterBottom
              >
                Region<span>*</span>
              </Typography>
            </Box>
            <FormControl fullWidth margin="normal" className={styles.boxStyle}>
              <InputLabel className={styles.boxStyle}>
                Select Region{" "}
              </InputLabel>
              <Select
                className={styles.regionSelect}
                value={region}
                onChange={handleRegionChange}
              >
                <MenuItem value="">
                  <em>Select Region</em>
                </MenuItem>
                {regionsData.map((data, index) => (
                  <MenuItem value={data.name} key={index}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormSection>

          <CustomButton variant="contained" color="primary">
            Next
          </CustomButton>
          <Box>
            <Typography className={styles.footer}>
              All Rights Reserved. No part of this web page may be reproduced in
              any way without the prior written permission of KPMG India.
            </Typography>
          </Box>
        </Container>
      </MainContainer>
    </>
  );
};

export default Sell;
