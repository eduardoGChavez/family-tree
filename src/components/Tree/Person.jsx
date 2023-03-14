import React, { useState } from "react";
import "../../styles/components/Tree/Person.css"
import DialogDetails from "./DialogDetails";

const Person = (props) => {
  const [showButton, setShowButton] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div className="person-container">{console.log("person", props)}

      <div className="person-content">

        <div
          className="person-content--preview"
          onClick={_ => setShowButton(!showButton)}
        >
          <img 
            className="person-content-preview--image"
            src={props.person.Foto}
            alt=""
          />
          <div className="person-content-preview--text">
            <p>{props.person.Nombre}</p>
            <p>{props.person.Nacimiento} - {props.person.Muerte}</p>
          </div>
        </div>
        
        {showButton &&
          <button
            className="person-content-showmore--button"
            onClick={_ => setShowDetails(!showDetails)}
          >
            Ver detalles
          </button>
        }

        <DialogDetails />
      </div>

    </div>
  );
}

export default Person;