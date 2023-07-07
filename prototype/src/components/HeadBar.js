
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion"
import logo from '../logo/1_Transparent_Image_small.png';
import logo_on_scroll from '../logo/3_Transparent_Image_small.png'; 
import AnimationScroll from './AnimationScroll';

const HeadBar = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [scrollDirection, setScrollDirection] = useState("down");
  const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
      let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

        if (prevScrollPos > currentScrollPos) {
          setScrollDirection("up");
        } else {
          setScrollDirection("down");
        }

        prevScrollPos = currentScrollPos;
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const variants = {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 20 },
    };

   return (
    <header className={`head-bar ${scrollDirection === "up" ? "slide-up" : "slide-down"}`} ref={ref}>
        <div className={`head-bar-content pageload ${isInView ? '' : 'unhooked'}`}>    
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5}}
            variants={variants}
          >
      
          <img src={logo} alt="Logo" title="Logo" className="logo-desktop" />  
            
          </motion.div>

          <menu className='popp-text'>
          <motion.li
            className='active'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8}}
            variants={variants}
            >
            Home
          </motion.li>
          <motion.li
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9}}
            variants={variants}
            >
            Wir
          </motion.li>
          <motion.li
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1}}
            variants={variants}
            >
            Projekte
          </motion.li>
          <motion.li
            className='cta-secondary'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1.1}}
            variants={variants}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p>Kontakt</p>
          </motion.li>
          </menu>
        </div>

        <div className={`head-bar-content on-scroll ${isInView ? '' : 'unhooked'}`}>    
          <div className='head-bar-bg'></div>
          <AnimationScroll></AnimationScroll>

            <div className='head-bar-tube'>
            <img src={logo_on_scroll} alt="Logo" title="Logo" className="logo-desktop" />
              <menu className='popp-text'>
                <li className='active'>Home</li>
                <li>Wir</li>
                <li>Projekte</li>
                <li className='cta-secondary'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <p>Kontakt</p>
                </li>
              </menu>
              </div>
        </div>
    </header>
  )
}
export default HeadBar 
