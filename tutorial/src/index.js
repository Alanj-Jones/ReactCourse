import React from "react";
import ReactDom from "react-dom";

/* //Nested components
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
const Person = () => <h2>Alan Jones</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root")); */

//CSS
import "./index.css";
//setup Variables
const firstBook = {
  img: "https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.webp",
  title: "Harry Potter y la piedra filosofal",
  author: "J. K. Rowling",
  description: "Un simple libro",
};

const secondBook = {
  img: "https://imagessl9.casadellibro.com/a/l/t5/79/9788423358779.jpg",
  title: "EL LUNES NOS QUERRAN",
  author: "NAJAT EL HACHMI",
  description:
    "Una historia emocionante y reveladora sobre la importancia de que las mujeres sean protagonistas de sus propias vidas.",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        description={firstBook.description}
      >
        <p>Ficcion</p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        description={secondBook.description}
      />
    </section>
  );
}
//Tambien podria ser asi:
//const Book = ({ img, author, title, description, children }) => {
const Book = (props) => {
  const { img, author, title, description, children } = props;
  return (
    <article className="book">
      <img src={img} alt="BOOK" />
      <h1>{title}</h1>
      <h5>{description}</h5>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
