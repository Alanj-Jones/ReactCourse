import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    console.log("Working...");
    title = "New Title!";
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
