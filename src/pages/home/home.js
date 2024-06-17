import { React } from "react";
import "./home.css";
import Estudiantes from "../../components/estudiantes/estudiantes";

function Home() {
  const ITEMS = [
    { title: "ESTUDIANTE 1", description: "Modelo 2023" },
    { title: "ESTUDIANTE 2", description: "Modelo 2023" },
    { title: "ESTUDIANTE 3", description: "Modelo 2023" },
    { title: "ESTUDIANTE 4", description: "Modelo 2023" },
  ];
  return (
    <div className="main-home">
      <h1 className="h1-home">ESTUDIANTES</h1>
      <div className="estudiantes-size">
        <div className="estudiantes-container">
          {ITEMS.map((item, index) => {
            return (
              <Estudiantes
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

export default Home;
