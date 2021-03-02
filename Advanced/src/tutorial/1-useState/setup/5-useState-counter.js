import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      //Functional approach
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <React.Fragment>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>More COMPLEX counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
