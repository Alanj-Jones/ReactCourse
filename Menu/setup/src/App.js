import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const { id, title, category, price, img, desc } = items[index];
  return (
    <main>
      <article className="menu">
        <header className="title">
          <h2>Nuestro menu</h2>
          <div className="underline"></div>
        </header>
        <div className="btn-container">
          <button className="filter-btn">Todo</button>
          <button className="filter-btn">Desayuno</button>
          <button className="filter-btn">Almuerzo</button>
          <button className="filter-btn">Milkshakes</button>
        </div>
        <Menu key={id} />
      </article>
    </main>
  );
}

export default App;
