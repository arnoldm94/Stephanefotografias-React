import React from "react";
import "./Portada.style.scss";

const Portada = () => {
  var myIndex = 0;
  carousel();
  async function carousel() {
    var i;
    var x = await document.getElementsByClassName("mySlidesPhotos");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
  }
  return (
    <>
      <section>
        <div id="home">
          <div className="FotosdeHome">
            <img
              className="mySlidesPhotos w3-animate-fading"
              src="img/portada/img1_recortada.JPG"
            />
            <img
              className="mySlidesPhotos w3-animate-fading"
              src="img/portada/img2_recortada.JPG"
            />
            <img
              className="mySlidesPhotos w3-animate-fading"
              src="img/portada/img3_recortada.JPG"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portada;
