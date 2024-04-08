import React from 'react'
import { ThemeContext } from "../../Context/Theme";
import "./Header.css";
import Navbar from '../NavBar/Navbar';

function Header() {
    const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img src="https://i.pinimg.com/originals/2c/5c/f9/2c5cf9576de99d921c28a1c29e65e124.jpg" alt="logo" />
            </span>
            swathy
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  )
}

export default Header