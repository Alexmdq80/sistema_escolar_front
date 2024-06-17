import { React } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-size">
      <div className="navbar-left">
        <Link to="/home">
          <h3 className="navbar-h3">INSCRIPCIONES</h3>
        </Link>
        <Link to="/espacios_academicos">
          <h3 className="navbar-h3">ESPACIOS ACADÉMICOS</h3>
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-right">
        <Link to="/perfil">
          <h3 className="navbar-h3">PERFIL</h3>
        </Link>
        <Link to="/register">
          <h3 className="navbar-h3">REGISTRESE</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
