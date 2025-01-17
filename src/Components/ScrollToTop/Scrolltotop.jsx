import React, { useEffect, useState } from 'react'
import "./Scrolltotop.css";
import { MdArrowUpward } from "react-icons/md";

function Scrolltotop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () =>
        window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
  
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    return isVisible ? (
      <div className="scroll-top">
        <a href="#top">
          <MdArrowUpward  fontSize="large" />
        </a>
      </div>
    ) : null;
  };

export default Scrolltotop