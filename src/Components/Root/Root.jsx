import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import H from "../H/H";

const Root = () => {
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
