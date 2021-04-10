import React from "react";

const Categories = ({ filter }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filter("all")}>
        Todo
      </button>
      <button className="filter-btn" onClick={() => filter("breakfast")}>
        Desayuno
      </button>
      <button className="filter-btn" onClick={() => filter("lunch")}>
        Almuerzo
      </button>
      <button className="filter-btn" onClick={() => filter("shakes")}>
        Milkshakes
      </button>
    </div>
  );
};

export default Categories;
