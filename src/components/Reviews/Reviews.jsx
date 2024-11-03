import React from "react";

const Reviews = () => {
  const linktogooglereviews = (e) => {
    window.open(
      (location.href =
        "https://www.google.es/maps/place/Stephane+Fotograf%C3%ADa/@43.3251545,-2.9859631,17z/data=!4m8!3m7!1s0xd4e5b42538ba275:0x2144770ca517170e!8m2!3d43.3251506!4d-2.9833882!9m1!1b1!16s%2Fg%2F11y1fbmxr4?hl=es&entry=ttu"),
      "_blank"
    );
  };

  return (
    <>
      <section className="reviews-section section-padding section-bg" id="section_4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              <em className="text-black">Testimonios de Clientes</em>

              <h2 className="text-black">Reseñas</h2>
            </div>

            <div className="timeline">
              <div
                id="review1"
                className="timeline-container timeline-container-left"
                onClick={linktogooglereviews}
              >
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div
                      id="reviews"
                      className="reviews-block-image-wrap d-flex align-items-center"
                    >
                      <img
                        src="./img/home/reviews/tatiana.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-black mb-1"></h6>
                        <em className="text-black mt-3"> Tatiana Rodriguez Barrera</em>
                      </div>
                    </div>

                    <div className="reviews-block-info mt-2">
                      <p>
                        Stephane es una buena profesional y persona de confianza , con un trato
                        cálido y agradable si de fotografiar los mejores momentos se trata ,estoy
                        encantada con su trabajo ya que fue la encargada de capturar cada momento
                        especial de mi boda , un placer , sin duda volvería a contratar sus
                        servicios , la recomiendo totalmente.👌🏼🥰…
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-black">
                          5.0 <small className="ms-2">Estrellas</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="review2"
                className="timeline-container timeline-container-right"
                onClick={linktogooglereviews}
              >
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div
                      id="reviews"
                      className="reviews-block-image-wrap d-flex align-items-center"
                    >
                      <img
                        src="./img/home/reviews/adriana.JPG"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-black mb-0"></h6>
                        <em className="text-black mt-3"> Adriana Cristina Verdezoto</em>
                      </div>
                    </div>

                    <div className="reviews-block-info mt-2">
                      <p>
                        Me encantó el trabajo de Stephane, hizo parte de las fotos de mi boda y en
                        exclusiva el momento de vestirme en casa. El trato inmejorable, lo hizo todo
                        muy fácil, y las fotos me enamoraron 😍…
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-black">
                          5.0 <small className="ms-2">Estrellas</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="review3"
                className="timeline-container timeline-container-left"
                onClick={linktogooglereviews}
              >
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div
                      id="reviews"
                      className="reviews-block-image-wrap d-flex align-items-center"
                    >
                      <img
                        src="./img/home/reviews/fatima.png"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />

                      <div className="">
                        <h6 className="text-black mb-0"></h6>
                        <em className="text-black mt-3"> Fatima Chal</em>
                      </div>
                    </div>

                    <div className="reviews-block-info mt-2">
                      <p>
                        Excelente fotógrafa, 100% recomendada sobre todo para esas personas que no
                        son muy fotogénicas porque te sacan lo mejor de ti. Si buscas un fotógrafo
                        de confíanza y con esa habilidad de sacarte fotos con calidad y no solo
                        cantidad, aquí te recomiendo una.
                      </p>

                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-black">
                          5.0 <small className="ms-2">Estrellas</small>
                        </strong>

                        <div className="reviews-group ms-auto">
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                          <img src="./img/icons/star.png" width="30" height="auto" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
