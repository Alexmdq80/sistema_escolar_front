import { React, useState, useEffect } from "react";
import "./home.css";
import Personas from "../../components/personas/personas";
import axios from "axios";

function Home() {
  const [personas, setPersonas] = useState(null);

  useEffect(() => {
    axios
      .get("personas", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setPersonas(response.data);
        // setPersonas(JSON.stringify(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="container">
      <h1 className="display-5 text-center my-5">Personas</h1>
      <div className="row">
        {!personas && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {
          personas &&
          personas.map((persona, index) => {
            return (
              <Personas
                key={index}
                nombre={persona.nombre}
                apellido={persona.apellido}
              />
            );
          })};
      </div>
    </div>
  );
}

export default Home;
