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

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      src="https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.webp"
      alt="BOOK"
    />
  );
};
const Title = () => <h1>Harry Potter y la piedra filosofal</h1>;
const Author = () => <h2>J. K. Rowling</h2>;

ReactDom.render(<BookList />, document.getElementById("root"));
