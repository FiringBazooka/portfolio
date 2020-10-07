import React from "react";

import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <div style={{ position: "fixed", top: 20 }}>
      <div>
        <img
          className="ui circular small image"
          src="/../../pic.jpg"
          alt="image"
        ></img>
      </div>
      <br />
      <div>
        <h2>Surya Bhattiprolu</h2>
      </div>
      <div className="ui list link">
        <Link className="item" to="About" smooth={true}>
          About
        </Link>
        <Link to="skills" className="item" smooth={true}>
          Skills
        </Link>
        <Link className="item" to="Projects" smooth={true}>
          Projects
        </Link>
        <Link to="Education" className="item" smooth={true}>
          Education
        </Link>
        <a className="item">Personal Info</a>
      </div>
    </div>
  );
};

export default Sidebar;
