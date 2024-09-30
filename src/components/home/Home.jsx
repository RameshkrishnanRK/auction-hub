import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../routing/components/Layout";
import HomeBanner from "./HomeBanner";

const Home = () => {
  const userStore = useSelector((state) => state.register.user);
  console.log("Registered-users from store: ", userStore);

  const userLocal = localStorage.getItem("user");
  console.log("Registered-users from local: ", userLocal);

  return (
    <>
      <Layout />
      <HomeBanner />
    </>
  );
};

export default Home;
