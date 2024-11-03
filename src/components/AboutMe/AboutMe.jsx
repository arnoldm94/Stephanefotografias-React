import React from "react";
import "./AboutMe.style.scss";

const AboutMe = () => {
  return (
    <>
      <section id="aboutmesection">
        <div className="titleaboutme">
          <h1 id="titleaboutme">¡Hola! soy Stephane</h1>
        </div>
        <div id="aboutme">
          <div>
            <img
              id="img_aboutme"
              className="aboutmeimg"
              src="img/home/aboutmeimg.JPG"
              alt="imagen de fotografa Stephane"
            />
          </div>
          <span className="paragraohaboutme">
            <p>
              Mi primer contacto con una cámara profesional ha sido en el bachillerato, tenía clases
              de cinema y me encantó. Después de eso, conocí un fotoperiodista que me llevó a
              fotografiar en conciertos y manifestaciones con su cámara. En el bachillerato también
              hice excursiones para productoras de televisión, y me apasionaba ver como todo
              funcionaba.
            </p>

            <p>
              Lo que mas me encantaba hacer era buscar belleza en las calles de São Paulo, jugando
              con luces y creando mi propio proyecto, pensando que algún día podría exponer en
              galerías de arte. Incluso participé de otro curso de fotografía artística para
              continuar con mis proyectos.
            </p>

            <p>
              En 2023 me inscribí a un curso de “Visual Merchandising” para estimular mi
              creatividad. Ha sido una sorpresa, pero de las buenas, porque me dio la oportunidad de
              pensar de nuevo en mi proyecto inicial de trabajar con fotografía. Escribí un esbozo
              de mi plan de negocio, pero con un enfoque principal en la fotografía de familia,
              porque al final es un área que me enamora por mis valores y por la posibilidad de
              conectar, conocer la historia de las personas y mostrar la belleza de estos momentos.
              Conforme los clientes llegaban empece a plantearme tener un estudio para poder
              atenderles mejor, ser más profesional.
            </p>

            <p>
              Quiero estar involucrada en la parte de creación de piezas de marketing de todo tipo.
              A parte de eso, también me gusta hacer videos documentales contando historias de
              personas o acontecimientos importantes, de exposiciones.
            </p>
          </span>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
