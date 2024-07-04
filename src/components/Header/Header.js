import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <NavMenu>
          <NavLink className="menu-item" to="projects" style={{Color:'white !important'}}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
