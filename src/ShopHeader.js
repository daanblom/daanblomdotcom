import { motion } from "framer-motion";
import React, { useState } from "react";

function ShopHeader() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="container">
      <div className="col-12 col-md-8 pt-5 m-auto titlein">
        <motion.div
          className=""
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0,
          }}
        >
          <h1>title.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            accumsan in nisl ut hendrerit. Praesent dictum massa lectus, quis
            ullamcorper velit pharetra sed.
          </p>
        </motion.div>
      </div>
      <div className=""></div>
      <div className="col">
        <video id="video" muted className="w-100">
          <source
            src="https://www.daanblom.com/ShopHeader.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="row">
        <div className="col-1 col-md-3"></div>
        <div className="col-10 col-md-6">
          <div className="shop--card p-4 shadow-lg">
            <button onClick="">Shop now.</button>
          </div>
        </div>
        <div className="col-1 col-md-3"></div>
        <p className="text-center pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default ShopHeader;

{
  /* <HoverVideoPlayer
videoSrc={video}
disablePictureInPicture={false}
loop={false}
restartOnPaused
/> */
}
