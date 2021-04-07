import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {!isHidden && <p>{info}</p>}
    </div>
  );
};

export default Question;
