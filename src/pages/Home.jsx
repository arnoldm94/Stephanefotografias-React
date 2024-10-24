import React from "react";
import NavBar from "../components/NavBar";
import Portada from "../components/Portada";
import AboutMe from "../components/AboutMe";
import ServicesHome from "../components/ServicesHome";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Portada />
      <AboutMe />
      <ServicesHome />
      <Reviews />
      <Footer />
    </>
  );
};
export default Home;
