import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, text, image } = people[index];

  const prevReview = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <article className="review">
      <div className="container">
        <div className="img-container">
          <img src={image} alt="Profile Picture" className="person-img" />
          <div className="quote-icon">
            <h3>~</h3>
          </div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <button className="prev-btn" onClick={() => prevReview()}>
            {"<"}
          </button>
          {console.log(index)}
          <button
            className="next-btn"
            onClick={() =>
              setIndex(index === people.length - 1 ? 0 : index + 1)
            }
          >
            {">"}
          </button>
        </div>
        <button
          className="random-btn"
          onClick={() =>
            setIndex(Math.floor(Math.random() * (people.length - 1)))
          }
        >
          Random Review!
        </button>
      </div>
    </article>
  );
};

export default Review;
