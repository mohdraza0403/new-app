import "./page.css";
// import { Parallax } from "parallax";
import markus from "../images/markus.jpg";
// import tech from "./images/tech.jpg";
// import plant from "./images/plant.jpg";
import { Parallax } from "react-scroll-parallax";

function Hello() {
  return (
      <div className="Page">
          <Parallax strength={600} bgImage={markus}>
              <div className="content">
                  <div className="text-content">Normal</div>
              </div>
          </Parallax>
    </div>
  );
}

export default Hello;