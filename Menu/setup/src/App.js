import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const visibleItems = items.filter((item) => item.category === category);
    setMenuItems(visibleItems);
  };

  return (
    <main>
      <article className="menu">
        <header className="title">
          <h2>Nuestro menu</h2>
          <div className="underline"></div>
        </header>
        <Categories filter={filterItems} />
        <div className="section-center">
          <Menu items={menuItems} />
        </div>
      </article>
    </main>
  );
}

export default App;
