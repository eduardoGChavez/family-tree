import React, { useState } from "react";
import Person from "../components/Tree/Person";

const Tree = () => {
  const [persons, setPersons] = useState([
    {
      Nombre: "Pablo",
      Foto: "https://via.placeholder.com/600/92c952",
      Detalles: "Vivía aquí y allá",
      Nacimiento: "1900",
      Muerte: "1910"
    },
    {
      Nombre: "Pecas",
      Foto: "https://via.placeholder.com/600/771796",
      Detalles: "Hacías cosas",
      Nacimiento: "1910",
      Muerte: "1920"
    },
  ])
  
  return (
    <div>
      Personas:
      {console.log("persons", persons)}
      {!!persons.length && 
        persons.map((person) => {
          return (
            <Person person={person} />
          );
        })
      }
    </div>
  );
}

export default Tree;