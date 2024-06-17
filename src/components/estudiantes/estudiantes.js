import { React } from "react";
import "./estudiantes.css";

function Estudiantes(props) {
  return (
    <div className="estudiantes-container">
      <h4>{props.title}</h4>
      <h4>{props.description}</h4>
      <button className="estudiantes-button">ESTUDIANTES</button>
    </div>
  );
}

export default Estudiantes;
