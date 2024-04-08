import React from 'react'
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiDotnet } from "react-icons/si";

function Techstacks() {
  return (
    <>
    <div className="section main" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        <div>
          <SiJavascript />
          <h5>Javascript</h5>
        </div>
        <div>
          <SiHtml5 />
          <h5>HTML</h5>
        </div>
        <div>
          <DiCss3 />
          <h5>CSS</h5>
        </div>
        <div>
          <FaReact />
          <h5>React</h5>
        </div>
        <div>
          <FaNodeJs />
          <h5>Nodejs</h5>
        </div>
        <div>
          <DiMongodb />
          <h5>MongoDb</h5>
        </div>

        <div>
          <SiExpress />
          <h5>Express</h5>
        </div>
        <div>
          <BsBootstrap />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <TbBrandCSharp  />
          <h5>Csharp</h5>
        </div>
        <div>
          <VscGithub />
          <h5>Github</h5>
        </div>
        <div>
          <SiMysql  />
          <h5>MySql</h5>
        </div>
        <div>
          <SiPostman  />
          <h5>Postman</h5>
        </div>
        <div>
          <SiDotnet  />
          <h5>.NET</h5>
        </div>
      </div>
    </div>
  </>
  )
}

export default Techstacks