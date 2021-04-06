import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // const { id, name, job, image, text } = people;
  const [index, setIndex] = useState(0);
  const { id, name, job, text, image } = people[index];

  return (
    <article className="container">
      <img src={image} alt="Profile Picture" />
      <h3></h3>
      <h2></h2>
      <p></p>
      <div>
        <button></button>
        <button></button>
      </div>
      <button></button>
    </article>
  );
};

export default Review;
