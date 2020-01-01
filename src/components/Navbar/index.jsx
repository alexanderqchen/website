import React from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "./styles.scss";

const Navbar = ({ location }) => {
  const { pathname } = location;
  console.log(pathname);

  return (
    <div id="navbar">
      <img src={Logo} alt="logo" />
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        {/* <li className={pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li> */}
        {/* <li className={pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default withRouter(Navbar);
