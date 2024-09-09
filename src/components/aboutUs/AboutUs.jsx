import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import styles from "./AboutUs.module.scss";
import Layout from "../../routing/components/Layout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Layout />
      <Box>
        <Box className={styles.box2}>
          <Breadcrumbs>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link style={{ textDecoration: "none" }}>About Us</Link>
          </Breadcrumbs>
        </Box>
      </Box>
      <div className={styles.mainContainer}>
        <Box mt={8} marginTop="10px">
          <Typography
            p={2}
            className={styles.title}
            marginLeft="15px"
            marginRight="15px"
          >
            About Us
          </Typography>
          <Box mt={4}>
            <Typography
              className={styles.subTitle}
              variant="body1"
              fontSize="small"
              marginLeft="15px"
              marginRight="15px"
            >
              <p>
                {" "}
                KPMG Auction Hub is an online platform that facilitates the
                sale and purchase of a variety of items. It
                includes Auctions, Fixed Price, and Classified listings and
                enables multiple vendors to sell on the website.{" "}
              </p>

              <p>
                The major objective of KPMG India's  Auction Hub Platform is to provide a
                mechanism to enable businesses and individuals to use
                Information and Communications Technology to efficiently conduct
                business. It is part of the efforts aimed to improve our global
                competitiveness.
              </p>

              <p>
                We at KPMG India  have substantial
                knowledge and experience in many areas. These include
                Accounting, Finance, Project Management, Procurement, Creating
                and Managing Financing Structures, Transportation, Retail,
                Importation, Real Estate and Electronic Commerce.
              </p>
            </Typography>
          </Box>
        </Box>
      </div>
      <Typography className={styles.footer} fontSize="13px">
      © Copyright 2024 KPMG India. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
      </Typography>
    </div>
  );
};

export default About;