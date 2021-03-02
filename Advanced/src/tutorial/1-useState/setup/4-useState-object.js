import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message",
  });

  const changeMessage = () => {
    // setMessage("Hello From React!");
    setPerson({ ...person, message: "Hello From React" });
  };

  /* Mi solucion:
  const changeName = () => {
    setPerson({ ...person, name: "Alan" });
  };

  const changeAge = () => {
    setPerson({ ...person, age: 21 });
  };
  */

  /* Para usar esto sacar 'person.' de el return
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState("24");
  const [message, setMessage] = useState("Random Message");
  */
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      {/* <button className="btn" type="button" onClick={changeName}>
        Change Name
      </button>
      <button className="btn" type="button" onClick={changeAge}>
        Change Age
      </button> */}
      <button className="btn" type="button" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
