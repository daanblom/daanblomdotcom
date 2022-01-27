import React, { useState } from "react";
import { motion } from "framer-motion";

function Test() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="container-fluid">
      <motion.div
        className="box"
        whileHover={{
          scale: 0.9,
        }}
        whileTap={{
          scale: 1.1,
        }}
        whileInView={{
          x: 100,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      />
    </div>
  );
}

export default Test;
