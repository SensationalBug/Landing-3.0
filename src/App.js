import "./App.css";
import img from "./images/web.png";
import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(false);
  const icono = useRef();
  const enlaces = useRef();

  const openMenu = () => {
    if (!count) {
      enlaces.current.className = "enlaces dos";
      setCount(true);
    } else {
      enlaces.current.className = "enlaces uno";
      setCount(false);
    }
    console.log(enlaces.current.classList);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <button
            onClick={() => openMenu()}
            className="btn btn-outline-light icono"
            ref={icono}
          >
            Menú
          </button>
          <div className="enlaces uno" ref={enlaces}>
            <button className="btn btn-outline-light">Inicio</button>
            <button className="btn btn-outline-light">Acerca de</button>
          </div>
        </nav>
        <div className="container">
          <div className="textos">
            <h1>SensationalBug</h1>
            <h2>Hacemos la web perfecta para ti.</h2>
            <button className="btn btn-outline-light">Contacto</button>
          </div>
          <div className="img">
            <img src={img} alt="..." />
            <a target="new_blank" href="http://www.freepik.com">
              Designed by upklyak / Freepik
            </a>
          </div>
        </div>
      </header>
      <div className="wave">
        <div style={{ height: "150px", overflow: "hidden" }}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
