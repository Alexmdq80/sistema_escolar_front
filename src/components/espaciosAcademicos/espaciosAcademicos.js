import { React } from "react";
import "./espaciosAcademicos.css";

function espaciosAcademicos(props) {
  return (
    <div className="espaciosAcademicos-container">
      <h4>{props.title}</h4>
      <h4>{props.description}</h4>
      <button className="espaciosAcademicos-button">FINALIZAR</button>
    </div>
  );
}

export default espaciosAcademicos;
