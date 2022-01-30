import { motion } from "framer-motion";
import React, { useState } from "react";

function Navbar() {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="container">
      <div className="nav p-3">
        <div className="col col-12 col-md-6 d-inline-flex align-items-center justify-content-center justify-content-md-start pb-2 pb-md-0 logo pointer-none">
          <a className="OSBI">DAANBLOM.COM</a>
        </div>
        <div className="col col-12 col-md-6 d-inline-flex justify-content-center justify-content-md-end">
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
            <ul className="d-inline-flex m-0 p-0 g-2">
              <li className="px-2 px-md-3 mx-1 link">
                <a href="/" className="">
                  Animation
                </a>
              </li>
              <li className="px-2 px-md-3 mx-1 link">
                <a href="/" className="">
                  Photography
                </a>
              </li>
              <li className="px-2 px-md-3 mx-1 link">
                <a href="/" className="">
                  About
                </a>
              </li>
              <li className="px-2 px-md-3 mx-1 link">
                <a href="/" className="">
                  Lab
                </a>
              </li>
            </ul>
            <label className="switch ">
              <input type="checkbox"></input>
              <span className="slider round shadow-sm"></span>
            </label>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
