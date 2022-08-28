import "./App.css";
import React from "react";
import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import "./components/buttonsHover.css";
import Buttons from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaGithub, FaCode, FaMailBulk } from "react-icons/fa";
import { IoDocumentAttachOutline, IoLogoFirebase } from "react-icons/io5";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <div className="imgContainer">
          <Carousel
            autoPlay={true}
            interval={3000}
            centerMode={true}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            className="imgCol"
            infiniteLoop={true}
            dynamicHeight={true}
            showIndicators={false}
            centerSlidePercentage={100}
          >
            <img src={web1} alt="..." className="img" />
            <img src={web2} alt="..." className="img" />
            <img src={web3} alt="..." className="img" />
            <img src={web4} alt="..." className="img" />
            <img src={web5} alt="..." className="img" />
          </Carousel>
        </div>
        <div className="textos">
          <div className="textosContainer">
            <h1>SensationalBug</h1>
            <h2>Hacemos la web perfecta para ti.</h2>
          </div>
          <div className="btnContainer">
            <Buttons
              clase={"button proyects"}
              title={"Proyectos"}
              icon1={<FaGithub size="2em" className="FaGithub" />}
              href1={"https://github.com/SensationalBug"}
              icon2={<FaCode size="2em" className="FaCode" />}
              href2={"https://ultraweb2-b7141.web.app/"}
              icon3={<IoLogoFirebase size="2em" className="IoLogoFirebase" />}
              href3={"https://presentacion-7631c.web.app/"}
            />
            <Buttons
              clase={"button contact"}
              title={"Contacto y CV"}
              icon1={<FaWhatsapp size="2em" className="FaWhatsapp" />}
              href1={"https://wa.me/+18092526353"}
              icon2={<FaMailBulk size="2em" className="FaMailBulk" />}
              href2={"https://presentacion-7631c.web.app/"}
              icon3={
                <IoDocumentAttachOutline
                  size="2em"
                  className="IoDocumentAttachOutline"
                />
              }
              href3={
                "https://firebasestorage.googleapis.com/v0/b/aboutme2-849fe.appspot.com/o/CV2022.pdf?alt=media&token=9964714d-16dc-4af1-a9df-f555aa74700d"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
