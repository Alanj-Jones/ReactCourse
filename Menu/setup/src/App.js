import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const { id, title, category, price, img, desc } = items;
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
        <div className="section-center">
          {items.map((meal) => {
            return (
              <Menu
                key={meal.id}
                title={meal.title}
                category={meal.category}
                price={meal.price}
                img={meal.img}
                desc={meal.desc}
              />
            );
          })}
        </div>
      </article>
    </main>
  );
}

export default App;
