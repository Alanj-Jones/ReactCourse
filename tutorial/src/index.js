import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//Books array
import { books } from "./books";
//Book component
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
