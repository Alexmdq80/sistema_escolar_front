import { React } from "react";
import "./espacios_academicos.css";
import espaciosAcademicos from "../../components/espaciosAcademicos/espaciosAcademicos";

function Espacios_Academicos() {
  const ITEMS = [
    { title: "BICICLETA 1", description: "Modelo 2023" },
    { title: "BICICLETA 2", description: "Modelo 2023" },
  ];
  return (
    <div className="main-home">
      <h1 className="h1-home">ESPACIOS ACADÉMICOS</h1>
      <div className="espacios_academicos-size">
        <div className="espacios_academicos-container">
          {ITEMS.map((item, index) => {
            return (
              <espaciosAcademicos
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Espacios_Academicos;
