import React from 'react';
import styles from '../../components/aboutUs/AboutUs.module.scss';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../../routing/components/Layout';
import aboutUsImage from '../../assets/images/aboutuspage.png';
import transperency from '../../assets/images/settings.png';
import timeframe from '../../assets/images/vintage-hourglass.png';
import userfriendly from '../../assets/images/hand-shake.png';
import trusted from '../../assets/images/gavel.png';
import bank from '../../assets/images/bank.png';
import realtime from '../../assets/images/loading.png';







const AboutUs = () => {
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
      <div className={styles.aboutUs}>
        <div className={styles.row}>
          <div className={styles.content}>
            <h2>About AuctionHub</h2>
            <p>Welcome to Auction-Hub, your number one source for all auction things. We're dedicated to giving you the very best of auction services, with a focus on dependability, customer service, and uniqueness.</p>
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
          </div>
          <div className={styles.image}>
            <img src={aboutUsImage} alt="About Us" />
          </div>
        </div>
        <div className={styles.centerHeading}>
          <h2>Our Features</h2>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <img src={bank} alt="wide range of product image" />
            <h3>Wide Range of Products</h3>
            <p>From antiques to electronics, AuctionHub offers a diverse selection of products to cater to all your needs and interests</p>
          </div>
          <div className={styles.feature}>
            <img src={realtime} alt="realtime" />
            <h3>Real-Time Bidding</h3>
            <p>Experience the thrill of real-time bidding with our live auction feature, allowing you to place bids and win items instantly.</p>
          </div>
          <div className={styles.feature}>
            <img src={trusted} alt="trustimage" />
            <h3>Verified Sellers</h3>
            <p>We ensure that all sellers on our platform are verified and trustworthy, so you can shop with confidence.</p>
          </div>
          <div className={styles.feature}>
            <img src={transperency} alt="Transperancy image" />
            <h3>Transparency</h3>
            <p>100% transparent and completely secure transaction.</p>
          </div>
          <div className={styles.feature}>
            <img src={timeframe} alt="timeframe" />
            <h3>Time Frame</h3>
            <p>A property's registration usually takes two months.</p>
          </div>
          <div className={styles.feature}>
            <img src={userfriendly} alt="userfriendly image" />
            <h3>User-Friendly Interface</h3>
            <p>Our intuitive and easy-to-navigate interface makes it simple for users of all ages to browse, bid, and buy with ease.</p>
          </div>
        </div>
      </div>
      <Typography className={styles.footer}  fontSize="13px">
      © Copyright 2024 KPMG India. All Rights Reserved. No part of this web page may be reproduced in any way without the prior written permission of KPMG India.
      </Typography>
    </div>
    
  );
};

export default AboutUs;
