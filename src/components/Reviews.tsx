import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      url: "/images/google.png",
      ratings: 550,
    },
    {
      url: "/images/facebook.png",
      ratings: 200,
    },
    {
      url: "/images/yelp.png",
      ratings: 100,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-20 px-4">
      <h2 className="text-[#004681] text-3xl md:text-4xl font-bold tracking-wide mb-8 text-center">
        Top Rated Dental Care
      </h2>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} url={review.url} review={review.ratings} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
