import React from 'react';
import { Box, Typography, Container, Breadcrumbs } from '@mui/material';
import { styled } from '@mui/system';
import styles from './AboutUs.module.scss'
import Layout from "../../routing/components/Layout";
import { Link } from 'react-router-dom';

const MainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  // minHeight: '100vh',
});

const ContentContainer = styled(Container)({
  flex: '1',
});

const About = () => {
  return (
    <>
      <Layout />
      <Box className={styles.breadcrumbs}>
        {/* <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
                        <Link to="/">
                            Home
                        </Link>
                        {pathSegments.map((segment, index) => {
                            const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
                            return (
                                <Link to={to}>
                                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                                </Link>
                            )
                        })}
                       
                    </Breadcrumbs> */}
        <Box sx={{ paddingLeft: '57px', paddingTop: '20px' }}>
          <Breadcrumbs className='breadcrumb' arial-label='breadcrumb'>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Home
            </Link>
            <Link style={{ textDecoration: 'none' }}>
              AboutUs
            </Link>

            {/* <Typography color="text.primary" href="/browse">Browse</Typography> */}
          </Breadcrumbs>
        </Box>
      </Box>
      <MainContainer>
        <ContentContainer className={styles.mainContainer}>
          <Box mt={1} >
            <Typography p={2} className={styles.title} gutterBottom >
              About Us
            </Typography>
            <Box mt={4}>
              <Typography className={styles.subTitle} variant="body1" gutterBottom>
                Barbados Auctions is an online platform that facilitates the sale and purchase of a variety of items located in Barbados. It includes Auctions, Fixed Price, and Classified listings and enables multiple vendors to sell on the website.
              </Typography>
              <Typography mt={2} className={styles.subTitle} variant="body1" gutterBottom>
                The major objective of Barbados Auctions is to provide a mechanism to enable businesses and individuals to use Information and Communications Technology to efficiently conduct business. It is part of the efforts aimed to improve our global competitiveness where we are cited as being very slow at doing business in Barbados.
              </Typography>
              <Typography mt={2} className={styles.subTitle} variant="body1" gutterBottom >
                Ian Collymore, the sponsor of the website has substantial knowledge and experience in many areas. These include Accounting, Finance, Project Management, Procurement, Creating and Managing Financing Structures, Transportation, Retail, Importation, Real Estate and Electronic Commerce. This is in addition to post graduate qualifications in Electronic Commerce.
              </Typography>
              <Typography className={styles.subTitleFooter} variant="body1">
                © Copyright 2023 http://barbadosauctions.com. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of http://barbadosauctions.com.
              </Typography>
            </Box>
          </Box>
        </ContentContainer>

      </MainContainer>
    </>
  );
};

export default About;