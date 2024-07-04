import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    font-size: 1.9rem;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          onClick={toggle}
          className="menu-item"
          to="contact"
        >
          Contact
        </NavLink>
      </NavMenu>
        <div style={{paddingTop:'20px'}}>
          <span>
            <a
              href="https://www.linkedin.com/in/lumina-lisha-r-9657011b3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="rgb(57, 134, 250)"size="30"/>
            </a>
          </span>
        <span style={{paddingLeft:'20px'}}>
            <a
              href="https://github.com/lisha1620"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="rgb(57, 134, 250)" size="30" />
            </a>
            </span></div>
    </SiderBar>
  );
}

export default Dropdown;
