import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.webp",
    title: "Harry Potter y la piedra filosofal",
    author: "J. K. Rowling",
    description: "Un simple libro",
  },
  {
    id: 2,
    img: "https://imagessl9.casadellibro.com/a/l/t5/79/9788423358779.jpg",
    title: "EL LUNES NOS QUERRAN",
    author: "NAJAT EL HACHMI",
    description:
      "Una historia emocionante y reveladora sobre la importancia de que las mujeres sean protagonistas de sus propias vidas.",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

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
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="BOOK" />
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

ReactDom.render(<BookList />, document.getElementById("root"));
