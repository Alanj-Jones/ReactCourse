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

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        description={firstBook.description}
      />
      <Book title="Random title" number={10 + 12} />
      <Book author="" />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="BOOK" />
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem", margin: "0.25rem" }}>
        {props.author}
      </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
