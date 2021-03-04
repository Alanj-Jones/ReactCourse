import React, { useState } from "react";
import data from "./data";

const List = () => {
  const [person, setPerson] = useState(data);

  return (
    <>
      <h3>{person.length} Birthdays today!</h3>
      <ul>
        {person.map((people) => {
          const { id, name, age, image } = people;
          return (
            <li key={id} className="person">
              <img src={image} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={() => setPerson([])}>
        Clear All
      </button>
    </>
  );
};

export default List;
