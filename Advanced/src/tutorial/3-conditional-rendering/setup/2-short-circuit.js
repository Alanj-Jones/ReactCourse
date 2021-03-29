import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const [isError, setIsError] = useState(false);

  /*const firstValue = text || "hello world";*/

  //Si el primero es verdadero devuelve el segundo valor, pero si el primero
  // es falso devuelve el primero
  /*const secondValue = text && "hello world";*/

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}

      {/* Si 'text' esta vacio/es falso devuelve la segunda opcion, si es verdadero 
      devuelve su valor */}
      <h1>{text || "A Text"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>IsError : True</p> : <p>IsError : False</p>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h3>Ther is NO ERROR</h3>
        </div>
      )}

      {/* Con el operador AND, si 'text' es verdadero devuelve el segundo valor
      {text && <h1>Hello world</h1>}
      {!text && <h1>Hello world</h1>} */}
    </>
  );
};

export default ShortCircuit;
