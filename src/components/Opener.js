import logo from '../logo.png'; 
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Opener = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Überprüfe, ob die Pfeile im Sichtfeld sind
    const handleScroll = () => {
      const arrowsGroup = document.querySelector(".Arrow-group");
      const arrowsRect = arrowsGroup.getBoundingClientRect();
      const isArrowGroupVisible = arrowsRect.top < window.innerHeight;

      setIsVisible(isArrowGroupVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Überprüfe beim Laden der Seite

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   return (
      <div className='Opener'>
         <div className='Menu-layer'>
            <img src={logo} alt="Logo" title="Logo" className="logo-desktop" />
            <menu>
               <li>Home</li>
               <li>Wir</li>
               <li>Projekte</li>
               <li>Kontakt</li>
            </menu>
         </div>

         <div className='Impression-layer'>
            <div>
               <div className='Impression-headline'>
                  <h1>Test das ist eine Überschrift die Umbricht tada</h1>
                  <p>Die handwerkliche Tätigkeit, die von der industriellen Massenproduktion abzugrenzen ist.</p>
               </div>
            </div>

            <div>
                  <div className='Impression-image'>
                  <img src='http://placekitten.com/g/800/500'></img>         
                     <div className='Overlay' />
                  </div>
            </div>
         </div>

         <div className='Arrow-group'>
            <i class="arrow down" />
            <i class="arrow down" />
            <i class="arrow down" />
         </div>

      </div>
   )
}
export default Opener