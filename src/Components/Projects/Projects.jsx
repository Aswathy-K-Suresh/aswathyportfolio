import React from 'react'
import "./Projects.css";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Projects() {
  return (
    <div className="section">
      <h2 className="section__title different">Projects</h2>
      <div className="allProjects">
        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img
                  src="https://motionarray.imgix.net/preview-619995-2Qe1NB0cJxxFA4qY-large.jpg?w=1400&q=60&fit=max&auto=format"
                  alt="Rockstar Games"
                />
              </div>
            </div>
            <div className="project_information">
              <h2>Restaurant</h2>
              <p>
              Delighted to unveil my newest creation in ReactJS :- A Restaurant App
that showcases finest dining in town by fetching details from JSON-file.
This project has been an incredible journey of growth and learning for me.

              </p>
              <div>
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
                <FaReact /> */}
               
              </div>
              <div>
                <a
                  href="https://aswathy-suresh-recipes-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Aswathy-K-Suresh/RestaurantListing.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img
                  src="https://www.montgomerys.com/wp-content/uploads/watertown-flooring-7-2.jpg"
                  alt="Sk-Weather-App"
                />
              </div>
            </div>
            <div className="project_information">
              <h2>Furniture Site</h2>
              <p>
              This project allowed me to explore the art of responsive website . By implementing media queries in my CSS code I was able to create my website more responsive.
              </p>
              <div>
                {/* <DiCss3 />
                <SiHtml5 />
                <IoLogoJavascript /> */}
              </div>
              <div>
                <a
                  href="https://aswathy-suresh-furniture-bootstrap.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Aswathy-K-Suresh/furniture.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730=" alt="" />
              </div>
            </div>
            <div className="project_information">
              <h2>Book Gallery</h2>
              <p>
              As a part of my web development journey, I have created a simple web site of Book-Store using technologies HTML and CSS.

This project allowed me to explore the art of responsive website . By implementing media queries in my CSS code I was able to create my website more responsive.

              </p>
              <div>
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://001bookgallery.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    View Live
                  </span>
                </a>
                <a
                  href="https://github.com/Aswathy-K-Suresh/BookGallery.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects_container" data-aos="fade-right">
          <div className="project">
            <div className="project_videocontainer">
              <div>
                <img
                  src="https://i.pinimg.com/originals/50/11/6c/50116ce359ead196fcc8f61e188c52e9.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information">
              <h2>Calculator</h2>
              <p>
                simple calculator
              </p>
              <div>
                {/* <SiNodedotjs />
                <SiExpress />
                <SiMongodb /> */}
              </div>
              <div>
                <a
                  href="https://aswathy-suresh-emicalculator-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt onbt">
                    URL for the API
                  </span>
                </a>
                <a
                  href="https://github.com/Aswathy-K-Suresh/calculator.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btns onbt">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Projects