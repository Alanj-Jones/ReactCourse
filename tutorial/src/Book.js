import React from "react";

const Book = ({ img, author, title, description }) => {
  //attribute, eventHandler
  //onClick,  onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article className="book">
      <img
        src={img}
        alt="BOOK"
        onMouseOver={() => {
          console.log(title);
        }}
      />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h5>{description}</h5>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Example 2
      </button>
    </article>
  );
};

export default Book;
