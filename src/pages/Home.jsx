import React from "react";
import Menu from "../components/Menu";
import Line from "../components/Line";
import Photo from "../components/Photo";
import Type from "../components/Type";
import Policy from "../components/Policy";
import Productlist from "../components/Productlist";
import HotProduct from "../components/HotProduct";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Line></Line>
      <Menu></Menu>
      <Photo></Photo>
      <Type></Type>
      <Policy></Policy>
      <Productlist></Productlist>
      <HotProduct></HotProduct>
      <Footer></Footer>
    </div>
  );
};

export default Home;
