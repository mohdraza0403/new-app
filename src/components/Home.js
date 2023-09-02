import "./home.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Sdata from "./Sdata.js";

function Home() {
  return (
    <div className="home">
      <ParallaxProvider>
        <Parallax >
        {Sdata.map((item) => (
            <div key={item.id} className="content">
              <div className="text-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <img src={item.img} alt={item.title} />
            </div>
          
        ))}
         </Parallax> 
      </ParallaxProvider>
    </div>
  );
}

export default Home;
