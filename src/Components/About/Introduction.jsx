import React from 'react'
import "./Introduction.css";
import { ThemeContext } from "../../Context/Theme";
import { MdOutlineExitToApp } from "react-icons/md";
import img from "../../assets/dp.jpg"
function Introduction() {
    const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
    <section id="#about">
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          About <span className="different">Me</span>
        </h2>
        <div className={"introduction " + themename}>
          <div className="introduction_logocontainer">
            <img src={img} alt="Images" />
          </div>
          <div className="introduction_datacontainer">
            <h4>
              Hi Everyone, My name is{" "}
              <span className="different">Aswathy Suresh </span> and I am from{" "}
              <span className="different">
                {" "}
                Edappally, Ernakulam, Kochi (India)
              </span>
              . I have completed my post graduation in Msc Computer
              from{" "}
              <span className="different">
                Cochin University of Science and Techonolgy
              </span>
              . Then I joined full stack development course by{" "}
              <span className="different">Luminar TechnoLab</span> a military type
              coding school.
            </h4>
            <h4>Terms That can describe me apart form Coding :</h4>
            <h4 className="different">
              <span className="icons">
              <MdOutlineExitToApp />
              </span>
              Dancer{" "}
            </h4>
            <h4 className="different">
              <span className="icons">
              <MdOutlineExitToApp />
              </span>
              Carooms Enthusiast{" "}
            </h4>
           
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Introduction