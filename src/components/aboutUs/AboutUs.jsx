import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./AboutUs.module.scss";
import Layout from "../../routing/components/Layout";

const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: '100vh',
});

const ContentContainer = styled(Container)({
  flex: "1",
});

const About = () => {
  return (
    <MainContainer >
      <Layout />
      <ContentContainer className={styles.mainContainer} >
        <Box mt={8} marginLeft='10px' marginRight='10px' marginTop='20px' >
          <Typography p={2} className={styles.title} gutterBottom borderRadius='5px'>
            About Us
          </Typography>
          <Box mt={4}>
            <Typography
              className={styles.subTitle}
              variant="body1"
              gutterBottom
              fontSize='small' 
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
      <Typography className={styles.footer} fontSize='small' >
        © Copyright 2023 http://barbadosauctions.com. All Rights Reserved. No
        part of this web page may be reproduced in any way without the prior
        written permission of http://barbadosauctions.com.
      </Typography>
    </MainContainer>
  );
};

export default About;
