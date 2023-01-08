import React from "react";
import TagOne from "../components/TagOne";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import AboutSer from "../components/AboutSER";
import Searchbar from "../pages/Searchbar";
import Teamboard from "./Teamboard";

const Home = () => {
  return (
    <>
      <div>
        <section id="home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
              </div>
            </div>
          </div>
        </section>
        <div>
          <Searchbar />
        </div>
        <AboutSer />
        {/* <Serv />
      <Contact /> */}
      </div>
      {/* <div className="about">
        <About />
      </div> */}
      <Teamboard/>
    </>
  );
};

export default Home;