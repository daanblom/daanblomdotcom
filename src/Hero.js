import { motion } from "framer-motion";
import React, { useState } from "react";
import "./main.css";
import { useRef, useEffect } from "react";

function Hero() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="container hero--image shadow-sm h100 br">
      <div className="container d-flex h-100 h-md-0 text-reveal">
        <div className="col col-12 col-md-6 d-inline-flex">
          <div className="hero--padding py-md-0 hero--textbox text-white">
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
              <h1 className="text-left">Title</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                accumsan in nisl ut hendrerit. Praesent dictum massa lectus,
                quis ullamcorper velit pharetra sed.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="col col-12 col-md-6 d-none d-md-inline-flex">
          <motion.div
            className=""
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            whileHover={{
              opacity: 0,
            }}
          >
            <div className="hero--logo my-4"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
