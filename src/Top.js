import React from "react";
import "./main.css";
import "./video-react.css";
import { Player, BigPlayButton, PosterImage } from "video-react";
import PosterFrame from "../src/media/posterframe.png";

function Top() {
  return (
    <div className="container">
      <div className="bg">
        <div className="row">
          <div className="col-0 col-md-1"></div>
          <div className="col-12 col-md-10">
            <div className="up top--bg br shadow-lg p-3 p-md-4">
              <h1 className="OS mb-3">Title.</h1>
              <Player
                src="https://www.daanblom.com/reel0.mp4"
                poster={PosterFrame}
              >
                <BigPlayButton position="center" />
              </Player>
              <div className="col-12 col-md-8 d-inline-flex">
                <p className="m-0 mt-3">
                  Lorem Khaled Ipsum is a major key to success. How’s business?
                  Boomin. You see the hedges, how I got it shaped up? It’s
                </p>
              </div>
              <div className="col-0 col-md-4 d-inline-flex"></div>
            </div>
          </div>
          <div className="col-0 col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Top;
