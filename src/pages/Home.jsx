import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Portada from "../components/Portada/Portada";
import AboutMe from "../components/AboutMe/AboutMe";
import ServicesHome from "../components/ServicesHome/ServicesHome";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Portada />
      <AboutMe />
      <ServicesHome />
      <Reviews />
    </>
  );
};
export default Home;
