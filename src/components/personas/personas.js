import { React } from "react";
import "./personas.css";

function Personas({ nombre, apellido }) {
  return (
    <div className="personas-container">
      <h4>{nombre}</h4>
      <h4>{apellido}</h4>
      <button className="personas-button">Personas</button>
    </div>
  );
}

export default Personas;
