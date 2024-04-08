import React, { useState } from 'react'
import { ThemeContext } from "../../Context/Theme";
import "./Navbar.css";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";


function Navbar() {

    const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
    const [showNavList, setShowNavList] = React.useState(false);
  
    const toggleNavList = (id) => {
      var element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      setShowNavList(!showNavList);
    };
  return (
    <>
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a
            href="#home"
            onClick={() => toggleNavList("#home")}
            className="link link--nav"
          >
            Home
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#about"
            onClick={() => toggleNavList("#about")}
            className="link link--nav"
          >
            About
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#skills"
            onClick={() => toggleNavList("#skills")}
            className="link link--nav"
          >
            Skills
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#projects"
            onClick={() => toggleNavList("#projects")}
            className="link link--nav"
          >
            Projects
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="#contact"
            onClick={() => toggleNavList("#contact")}
            className="link link--nav"
          >
            Contact
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="https://drive.google.com/file/d/154Kf42z3gfEuYF8FO5S3c-Q50r5BJwXm/view?usp=drive_link"
            onClick={toggleNavList}
            className="link link--nav"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <button
        type="button"
        onClick={toggeltheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
        style={{ backgroundColor: "inherit" }}
      >
        {themename === "dark" ? <MdOutlineWbSunny /> : <IoSunnyOutline />}
      </button>
      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <IoIosClose /> : <IoMdMenu />}
      </button>
    </nav>
  </>
  )
}

export default Navbar