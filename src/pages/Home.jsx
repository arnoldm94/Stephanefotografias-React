import React from "react";

import Portada from "../components/Portada/Portada";
import AboutMe from "../components/AboutMe/AboutMe";
import ServicesHome from "../components/ServicesHome/ServicesHome";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";
import "../../styles/sass/homestyles.scss";

const Home = () => {
  return (
    <>
      <Portada />
      <div className="homeApp">
        <AboutMe />
        <ServicesHome />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};
export default Home;
