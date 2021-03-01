import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  /*
  Mi posible solucion. 
  Para probarlo cambiar el onClick en la linea 28 a 'handleClick'
  const handleClick = () => {
    if (people.length > 0) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  };
  */
  return (
    <>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;

        const removeItem = (id) => {
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        };
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Everyone
      </button>
    </>
  );
};

export default UseStateArray;
