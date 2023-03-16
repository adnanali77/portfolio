import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';

function Education() {
  return (
    <div className="education">
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021 - Continue"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          MSCS Master of Computer Science
        </h3>
        <p> University of Central Punjab, Lahore</p>
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          MCS ( Master In Computer Science )
        </h3>
        <p>
          Superior University Lahore
        </p>
        {/* <p>Developed the backend infrastructure for 3 projects.</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          B.SC Computer Science
        </h3>
        <p>
        Islamia University Bahawalpur, Punjab
        </p>
        {/* <p>
          Helped the team launch 2 major features by working both in the front
          end and back end.
        </p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          F.A
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          FortAbbas, Punjab
        </h4>
        <p>
        Board of Intermediate and Secondary Education, Bahawalpur
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2014 - 2018"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Matriculation
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          FortAbbas, Punjab
        </h4>
        <p>
        Board of Intermediate and Secondary Education, Bahawalpur
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);
}
export default Education;
