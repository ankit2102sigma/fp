import React from "react";
import "../App.css";
import './Home.css';

import HeroSection from "../components/HeroSection.js";
import Footer from "../components/Footer.js";
import Working from "../components/workin.js";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="main">
        {/* <h1>
          "Choosing the right career is crucial for long-term fulfillment and
          success. Consider your interests, skills, values, and job prospects
          before making a decision."
        </h1> */}
      
      <div className="container-Home">
        <div className="row">
          <div className="column-img">
            <img src="/images/3.png" alt="Image" />
          </div>
          <div className="column">
            <h2>Let Saarthi guide you to the perfect career path</h2>
            <p>
              Saarthi is a trusted career guidance platform that empowers
              individuals to discover their potential, make informed decisions,
              and achieve professional success through personalized guidance
              and resources.
            </p>
            <p>
            Choosing Saarthi means choosing a trusted partner who is committed to your success.
            </p>
            <button>Discover your dream career </button>
          </div>

      </div>


        </div>
        </div>

        <div className="img-mid">
        <img src="/images/18.jpg" alt="Image" />
        </div>
        <h1 id="head-h1">How  Works</h1>
        <Working />
      <Footer />
    </>
  );
}

export default Home;
