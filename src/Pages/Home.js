import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Muhammad Adnan Ali</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a  href="https://pk.linkedin.com/in/muhammad-adnan-ali-53ba631b1" target="_blank">
          <LinkedInIcon />
          </a>
          <a href="mailto:adnnjee035@gmail.com">
          <EmailIcon />
          </a>
          <GitHubIcon />
        </div>
      </div>
      <div className="aboutme common">
        <h1>About Me</h1>
        <hr></hr>
        <p>I am dedicated individual who has the ambition to succeed in any given environment.
        Always eager to learn with a can do attitude.I get along well with others, whilst 
        also working efficiently on my own.Self-Learning, thinking out of the box and updating myself with modern technology is what i am doing.</p>
      </div>
      <div className="skills common">
        <h1> Skills</h1>
        <hr></hr>
        <ul className="list">
        <h2> Front-End:</h2>
          <li className="item">
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, StyledComponents, SCSS, Tailwind
            </span>
          </li>
          {/* <hr className="hrlow"></hr> */}
          <h2>Back-End:</h2>
          <li className="item">
            <span>
              NodeJS, ExpressJS, GraphQL,
              MySQL, MongoDB, Git & GitHub, RestAPI
            </span>
          </li>
          {/* <hr className="hrlow"></hr> */}
          <h2>Language:</h2>
          <li className="item">
            <span>JavaScript</span>
          </li>
          {/* <hr className="hrlow"></hr> */}
        </ul>
      </div>
      <div className="common exp">
        <h1>EXPERIENCE</h1>
        <hr></hr>
        <h2>PTCL: Customer Support Executive</h2>
        <ul>
          <li>
          provide trouble shooting, technical support, product
          information to the customers
          </li>
          <li>
          Maintain a high level of customer satisfaction throughout
          the process and provide complaint reference for future
          correspondence to the customer
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
