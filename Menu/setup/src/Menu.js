import React from "react";

const Menu = ({ items }) => {
  return items.map((item) => {
    return (
      <div className="menu-item" key={item.id}>
        <img src={item.img} alt="food" className="photo" />
        <section className="item-info ">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">${item.price}</h4>
          </header>
          <p className="item-text">{item.desc}</p>
        </section>
      </div>
    );
  });
};
export default Menu;
