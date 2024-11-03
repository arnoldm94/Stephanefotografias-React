import React from "react";
import "./ServicesHome.style.scss";

const ServicesHome = () => {
  return (
    <>
      <div id="services">
        <div className="servicesbox">
          <div className="servicesbox_img">
            <a href="./pages/german&tatiana/german&tatiana.html">
              <img src="./img/home/servicios1.jpg" alt="" />
            </a>
          </div>
          <div className="servicesbox_title">
            <h3>German & Tatiana</h3>
          </div>
          <div className="servicesbox_body">
            <h6>18.05</h6>
          </div>
        </div>

        <div className="servicesbox ">
          <div className="servicesbox_img">
            <a href="./pages/adriana&julio/adriana&julio.html">
              <img src="./img/home/servicios2.JPG" alt="" />
            </a>
          </div>
          <div className="servicesbox_title">
            <h3>Julio & Adriana</h3>
          </div>
          <div className="servicesbox_body">
            <h6>22.07</h6>
          </div>
        </div>

        <div className="servicesbox ">
          <div className="servicesbox_img">
            <a href="./pages/samira&karim/samira&karim.html">
              <img src="./img/home/servicios3.JPG" alt="" />
            </a>
          </div>
          <div className="servicesbox_title">
            <h3>Karim & Samira</h3>
          </div>
          <div className="servicesbox_body">
            <h6>27.01</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
