import React from 'react'
import "./Footer.css";
import { ThemeContext } from "../../Context/Theme";

function Footer() {

    const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
    <div className={"section " + themename}>
      <a href="/" rel="noreferrer" target="_blank">
        <div className="footerBox">
          <h3 className="footer">
            Made with{" "}
            <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
            By Aswathy
          </h3>
        </div>
      </a>
    </div>
  </>
  )
}

export default Footer