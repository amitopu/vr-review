import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = (props) => {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch("reviewdata.json")
            .then((res) => res.json())
            .then((data) => setReviewData(data));
    }, []);

    let numReview = reviewData.length;
    if (props) {
        numReview = props.num;
    }

    return (
        <div className="flex flex-wrap justify-around mb-6">
            {reviewData.slice(0, numReview).map((review) => (
                <Review key={review.id} review={review}></Review>
            ))}
        </div>
    );
};

export default Reviews;
