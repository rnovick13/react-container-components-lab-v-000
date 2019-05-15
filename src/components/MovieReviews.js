// // Code MovieReviews Here
// our MovieReviews component should be stateless and functional.
//
// You are free to lay out each review as you like using the
//  data that the API returns, but make sure that the component
//  outputs a top-level element with the class review-list
//  and that each review is wrapped by an element with class review.

import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"
          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};


const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
