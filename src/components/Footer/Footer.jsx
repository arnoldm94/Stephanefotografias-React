import React from "react";
import "./Footer.style.scss";

const Footer = () => {
  return (
    <footer id="Footer" className="site-footer ">
      <div className="containerfooter">
        <div className="contacto">
          <em>Contacto:</em>

          <p>
            Telefono:
            <a href="tel: +34 617-509-702" className="site-footer-link">
              (34) 617 509 702
            </a>
          </p>

          <p>
            Email:
            <a href="mailto:contactostephane@gmail.com" className="site-footer-link">
              contactostephane@gmail.com
            </a>
          </p>
        </div>

        <div className="horario">
          <em className="">Horarios de atencion:</em>

          <ul className="opening-hours-list">
            <li className="">Lunes - Viernes: 9:00 - 20:00</li>

            <li className="">Sabado: 11:00 - 16:30</li>

            <li className="">Domingo: Cerrado</li>
          </ul>
        </div>

        <div className="dondeencontrarme">
          <em className="">Donde puedes encontrarme:</em>
          <ul className="social-icon">
            <li className="social-icon-item">
              <a
                href="https://www.facebook.com/stephane.cordero.737"
                target="_new"
                className="social-icon-link"
              >
                <img
                  src="img/icons/social/logotipo-de-facebook.png"
                  height="auto"
                  width="20px"
                  alt="Logotipo de Facebook"
                />
              </a>
            </li>

            <li className="social-icon-item">
              <a
                href="https://www.instagram.com/stephanefotografias/"
                target="_new"
                className="social-icon-link"
              >
                <img
                  src="img/icons/social/logotipo-de-instagram.png"
                  height="auto"
                  width="20px"
                  alt="Logotipo de instagram"
                />
              </a>
            </li>

            <li className="social-icon-item">
              <a
                href="https://api.whatsapp.com/message/AGZGX3VC6M6SN1?autoload=1&app_absent=0"
                target="_new"
                className="social-icon-link"
              >
                <img
                  src="img/icons/social/logotipo-de-whatsapp.png"
                  height="auto"
                  width="20px"
                  alt="Logotipo de whatsapp"
                />
              </a>
            </li>
          </ul>

          <div className=""> Bilbao, 48014. España </div>
        </div>

        <div id="footergallery">
          <div className="pswp-gallery pswp-gallery--single-column" id="my-gallery2">
            <a href="https://www.instagram.com/stephanefotografias/" target="_blank">
              <img src="/img/clientes/BodaAdriana&Julio_22072023/2.JPG" alt="" />
            </a>

            <a href="https://www.instagram.com/stephanefotografias/" target="_blank">
              <img src="/img/clientes/BodaG&Tatiana/28.jpg" alt="" />
            </a>

            <a href="https://www.instagram.com/stephanefotografias/" target="_blank">
              <img src="/img/clientes/BodaK&Samira/19.JPG" alt="" />
            </a>

            <a href="https://www.instagram.com/stephanefotografias/" target="_blank">
              <img src="/img/clientes/BodaG&Tatiana/11.jpg" alt="" />
            </a>

            <a href="https://www.instagram.com/stephanefotografias/" target="_blank">
              <img src="/img/clientes/BodaAdriana&Julio_22072023/18.JPG" alt="" />
            </a>

            <a href="https://www.instagram.com/stephanefotografias/" target="_blank">
              <img src="/img/clientes/BodaAdriana&Julio_22072023/9.JPG" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text mb-0">
          Copyright © StephaneFotografias - Design:
          <a
            rel="sponsored"
            href="https://www.instagram.com/arnoldmelet/"
            className="ms-1"
            target="_blank"
          >
            Arnold Melet
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
