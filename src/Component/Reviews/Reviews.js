import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = (props) => {
    const reviewNum = props.num;
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        fetch("reviewdata.json")
            .then((res) => res.json())
            .then((data) => setReviewData(data));
    }, []);

    return (
        <div className="flex flex-wrap justify-around">
            {reviewData.slice(0, 10).map((review) => (
                <Review key={review.id} review={review}></Review>
            ))}
        </div>
    );
};

export default Reviews;
