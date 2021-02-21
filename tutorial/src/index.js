import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
const books = [
  {
    img:
      "https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.webp",
    title: "Harry Potter y la piedra filosofal",
    author: "J. K. Rowling",
    description: "Un simple libro",
  },
  {
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
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title, description } = props.book;
  return (
    <article className="book">
      <img src={img} alt="BOOK" />
      <h1>{title}</h1>
      <h5>{description}</h5>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
