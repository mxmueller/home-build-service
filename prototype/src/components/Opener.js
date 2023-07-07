import React, { useEffect, useState } from "react";
import Typed from 'react-typed'; 
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

const Opener = () => {
  const [ref, inView] = useInView();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
      className="Opener"
    >
      <div className="Impression-layer">
        <div>
          <div className="Impression-headline">
            <h1 className='teko-display'>Handwerk mit Leidenschaft, aus einer Hand.</h1>
            
            <p className='popp-text'>
              <Typed
                  strings={['Die handwerkliche Tätigkeit, die von der industriellen Massenproduktion abzugrenzen ist. Ihre zuverlässigen Partner für professionelle Handwerksarbeiten.']}
                  typeSpeed={30}
              />
            </p>
          </div>
        </div>

        <div>
          <Parallax speed={-35} translateY={[-40, 40]}>
            <div className="Impression-image">
  
              <ParallaxBanner
                layers={[{ image: 'http://placekitten.com/g/800/500', speed: -4 }]}
                className="impression-parallax"
              />
              <div className="Overlay" />
            </div>
          </Parallax>
        </div>
      </div>

      <Parallax speed={-20} translateY={[-10, 80]}>
      <div className="Arrow-group">      
        <div className="arrow-frame">
          <motion.i
            className="arrow"
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1.0 }}
            style={{ transform: "rotate(20deg)" }}
          />
        </div>

        <div className="arrow-frame">
          <motion.i
            className="arrow"
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1.2 }}
            style={{ transform: "rotate(20deg)" }}
          />
        </div>

        <div className="arrow-frame">
          <motion.i
            className="arrow"
            whileHover={{ scale: 1.1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 1.4 }}
            style={{ transform: "rotate(20deg)" }}
          />
        </div>
      </div>
      </Parallax>
      
    </motion.div>

  );
};

export default Opener;
