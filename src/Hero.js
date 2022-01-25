import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function Hero() {
  const fadeUp = useRef();

  useEffect(() => {
    gsap.from([fadeUp.current], {
      opacity: 0,
      y: 10,
      duration: 1,
      rotation: 0.001,
      delay: 1,
    });
  });

  return (
    <div className="container hero--image shadow-sm h100 br">
      <div className="container d-flex h-100 h-md-0 text-reveal">
        <div ref={fadeUp} className="col col-12 col-md-6 d-inline-flex">
          <div className="hero--padding py-md-0 hero--textbox text-white">
            <h1 className="text-left">Title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              accumsan in nisl ut hendrerit. Praesent dictum massa lectus, quis
              ullamcorper velit pharetra sed.
            </p>
          </div>
        </div>
        <div className="col col-12 col-md-6 d-none d-md-inline-flex">
          <div className="hero--logo"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
