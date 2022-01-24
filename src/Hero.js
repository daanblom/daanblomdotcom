import React from "react";
import "./main.css";

function Hero() {
  return (
    <div className="container hero--image shadow-sm h100 br">
      <div className="container d-flex h-100 h-md-0">
        <div className="col col-12 col-md-6 d-inline-flex">
          <div className="hero--padding py-md-0 hero--textbox text-white">
            <h1 className="text-left">Title</h1>
            <p>
              Definitions. "License" shall mean the copyright holders, and the
              date of initial External Deployment, whichever is longer.{" "}
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
