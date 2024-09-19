import React from "react";
import Styles from "./Home.module.scss";
import { Typography } from "@mui/material"; 
import Layout from "../../routing/components/Layout";
import { useSelector } from "react-redux";

const Home = () => {
  const userStore = useSelector((state) => state.register.user);
  console.log('Registered-users from store: ', userStore);

  const userLocal = localStorage.getItem("user");
  console.log('Registered-users from local: ', userLocal);

  return (
    <>
      <Layout />
      <div className={Styles.auctionContainer}>
        <Typography
          className={Styles.auctionTitle}
          component="h1"
          fontWeight="bold"
          fontSize="1.75rem"
          marginLeft="40px"
          margin-top="5px"
          paddingTop='20px'
          paddingBottom='20px'
        >
          Welcome to KPMG Auction Platform!
        </Typography>
        <Typography
          className={Styles.auctionDescription}
          component="p"
          margin="20px"
          marginTop='10px'
        >
          KPMG Auction platform is a dynamic platform for buying and selling of
          Goods and Properties. It's a all in one Platform that provides users,
          the ease of choosing with customised browsing options. It's the
          ultimate destination for buyers and sellers to engage in competitive
          bidding for a wide range of exclusive items. Our user friendly
          interface ensures a seamless experience, allowing you to browsethrough
          diverse catagories from electronics and fashions to collectibles and
          homegoods. Sellers can easily list their items with detailed
          descriptions and photos, attracting bidders with ease. Our real-time
          bidding system adds excitement, keeping you on the edge of your seat
          as you watch the count down timers. We prioritize your security with
          top-notch measures to protect your data and transactions. With
          automated bidding options, you can set your maximum bid and let our
          system do the rest. Stay informed with notifications about bid updates
          and auction reminders. Join our thriving community of buyers and
          sellers, and discover unbeatable deals and rare finds. Sign up today
          and start your auction adventure with us!
        </Typography>
      </div>
    </>
  );
};

export default Home;
