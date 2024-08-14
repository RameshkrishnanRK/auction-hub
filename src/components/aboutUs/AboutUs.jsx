import React from "react";
import { Box, Typography, Container, Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./AboutUs.module.scss";
import Layout from "../../routing/components/Layout";
import { Link } from "react-router-dom";


const ContentContainer = styled(Container)({
  flex: '1',
});

const About = () => {
  return (
    <div>
      <Layout />
      <Box>
        <Box className={styles.box2}>
          <Breadcrumbs >
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Link style={{ textDecoration: 'none' }}>
              About Us
            </Link>

          </Breadcrumbs>
        </Box>
      </Box>
      <ContentContainer className={styles.mainContainer}  >
        <Box mt={8} marginTop='10px'  >
          <Typography p={2} className={styles.title} margin='5px'  >
            About Us
          </Typography>
          <Box mt={4} >
            <Typography
              className={styles.subTitle}
              variant="body1"
              fontSize='small'
              marginLeft='5px'
            >
              <p> Barbados Auctions is an online platform that facilitates the sale and purchase of a variety of items located in Barbados. It
                includes Auctions, Fixed Price, and Classified listings and enables multiple vendors to sell on the website. </p>

              <p>The major objective of Barbados Auctions is to provide a mechanism to enable businesses and individuals to use Information and
                Communications Technology to efficiently conduct business. It is part of the efforts aimed to improve our global competitiveness
                where we are cited as being very slow at doing business in Barbados.</p>

              <p>Ian Collymore, the sponsor of the website has substantial knowledge and experience in many areas. These include Accounting,
                Finance, Project Management, Procurement, Creating and Managing Financing Structures, Transportation, Retail, Importation, Real
                Estate and Electronic Commerce. This is in addition to post graduate qualifications in Electronic Commerce.</p>

            </Typography>


          </Box>
        </Box>
      </ContentContainer>
      <Typography className={styles.footer} fontSize='14px' >
        © Copyright 2023 http://barbadosauctions.com. All Rights Reserved. No
        part of this web page may be reproduced in any way without the prior
        written permission of http://barbadosauctions.com.
      </Typography>
    </div>
  );
};

export default About;