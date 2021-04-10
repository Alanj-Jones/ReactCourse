import React from "react";

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <div className="menu-item">
      <img src={img} alt="food" className="photo" />
      <section className="item-info ">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </section>
    </div>
  );
};

export default Menu;
