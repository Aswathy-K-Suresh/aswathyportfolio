import React from 'react'
import "./About.css";
import Introduction from './Introduction';
import Techstacks from './Techstacks';
import Timeline from './Timeline';
import Type from './Type';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function About() {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Aswathy Suresh</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on Asp.Net since last 2 years and delivered
          3 projects till now.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Aswathy-K-Suresh"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:aswathysuresh004@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
           <MdEmail />
          </a>
          <a
            href="tel:+91 9961310411"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <IoMdPhonePortrait />
          </a>
          <a
            href="https://www.linkedin.com/in/aswathy-suresh-76805017a/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          {/* <a
            href="https://twitter.com"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a> */}
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/154Kf42z3gfEuYF8FO5S3c-Q50r5BJwXm/view?usp=drive_link"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  )
}

export default About