import React from "react";
import { stackList } from "../../data/ProjectData";
import Photo from "../Contact/Photo.jpeg"
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src={Photo}
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hey! My name is <strong>Lumina Lisha R</strong>. Frontend Developer | React JS
            </ScrollAnimation>

            <br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I am a front-end developer for creating engaging UI and brining products to life.
            </ScrollAnimation>

            <br />
            <ScrollAnimation animateIn="fadeInLeft">
            <b>Experience:</b>
            <p>Tata Consultancy Services (From : July 2021 to Today)</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" style={{paddingTop:'15px'}}>
            3+ years as a Frontend Web developer using React JS. Developed location tracking application using Azure maps and open street maps like google maps with React JS. 
            Developed Real time dashboards in Power Bi & embedded in React JS, worked in react charts, redux, API integration, responsive web pages. 
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
            <b>Awards & Recognition:</b>
            <p>1. Star team award</p>
            <p>2. Out of the box Thinker Award</p>
            <p>3. Star Performer Award </p>
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
