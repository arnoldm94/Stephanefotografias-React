import React from "react";
import stephanefotografiaslogo from "../../assets/logostephanefotografias.svg";
import "./NavBar.style.scss";

const NavBar = () => {
  window.onscroll = changePos;

  function changePos() {
    var header = document.getElementById("navbarSteph");
    if (window.scrollY > 70) {
      header.style.position = "fixed";
      header.style.top = "0";
    } else {
      header.style.position = "";
      header.style.top = "";
    }
  }
  return (
    <>
      <nav id="navbarSteph" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={stephanefotografiaslogo}
              className="logo react d-inline-flex p-2"
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
                <a
                  id="homeclick"
                  className="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item pe-3">
                <a id="aboutmeclick" className="nav-link" href="./index.html#titleaboutme">
                  About Me
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="./pages/services.html">
                  Services
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="./pages/gallery.html">
                  Gallery
                </a>
              </li>
              <li className="nav-item pe-3">
                <a className="nav-link" href="./pages/contact.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;