import React, { useContext } from 'react'
import "./Timeline.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ThemeContext } from "../../Context/Theme";
import { MdOutlineWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";

function Timeline() {
    const [{ themename }] = React.useContext(ThemeContext);
    const [linecolor, setlinecolor] = React.useState(
      themename === "light" ? "#23283e" : "#fcfcfc"
    );
  
    React.useEffect(() => {
      if (themename === "dark") {
        setlinecolor("#fcfcfc");
      } else {
        setlinecolor("#23283e");
      }
    }, [themename]);

  return (
    <>
    <div className="section mainsection">
      <h2 className="section__title" data-aos="fade-right">
        My <span className="different">Timeline 💫</span>
      </h2>
  
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
          date={"Mar 2022 - Present"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<MdOutlineWork />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
          >
            Software Engineer L4
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Claysys Technologies
          </h4>
          <p data-aos="fade-right">
            Working as a Software developer worked on 3 projects
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          date={"2023  -  2024"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<IoSchoolSharp />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
          >
            MEARN FULL STACK WEB DEVELOPMENT ANGULAR & REACT 
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Luminar TechnoLab
          </h4>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date={"2019  -  2021"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<IoSchoolSharp />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
          >
            Msc Computer Science
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Cochin University Of Science And Technology
          </h4>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"2016 -  2019"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<IoSchoolSharp />}
        >
          <h3
            className="vertical-timeline-element-title"
            data-aos="fade-right"
          >
            BCA 
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Al Ameen College, Edathala
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<MdStarRate  />}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </>
  )
}

export default Timeline