import React, { useEffect,useContext } from "react";
import Nav from "../components/navigation/navigation";
import Preview from "../components/preview/preview";
import Search from "../components/search/search";
import Ads from "../components/ads/ads";
import Disclosure from "../components/disclosure/disclosure";
import Addpost from "../components/addpost/addpost";
import Footer from "../components/footer/footer";

const Home = () => {
 

  
  return (
    <>
      <Nav />
      <Preview />
      <Search />
      <Ads />
      <Disclosure />
      <Addpost />
      <Footer />
    </>
  );
};

export default Home;
