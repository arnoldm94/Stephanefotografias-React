import React from "react";
import stephanefotografiaslogo from "../../assets/logostephanefotografias.svg";
import "./NavBar.style.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  window.onscroll = function () {
    let navbarchange = document.getElementById("navbarSteph");
    let navbarlogo = document.getElementById("logosteph");
    if (window.scrollY > 70) {
      navbarlogo.classList.add("smallerlogo");
      navbarchange.classList.add("smaller");
      navbarchange.style.position = "fixed";
    } else {
      navbarlogo.classList.remove("smallerlogo");
      navbarchange.classList.remove("smaller");
      navbarchange.style.position = "relative";
    }
  };
  return (
    <>
      <nav id="navbarSteph" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">
            <img
              src={stephanefotografiaslogo}
              className="logo react d-inline-flex"
              alt="logo de Stephanefotografias"
              id="logosteph"
            />

            <h1 className="d-inline-flex p-2">Stephane Fotografias</h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item pe-3">
                <Link to="/" id="homeclick" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item pe-3">
                <a id="aboutmeclick" className="nav-link" href="#aboutmesection">
                  About Me
                </a>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
