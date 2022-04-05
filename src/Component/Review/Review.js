import React from "react";

const Reviews = (props) => {
    const { name, picture, review, rating } = props.review;
    console.log(props.review);
    return (
        <div className="mt-16 w-[300px] border-2 border-slate-800 rounded-[10px] p-4">
            <div className="h-20 w-20 mx-auto">
                <img
                    className="h-20 w-20 rounded-full border-2 border-slate-700"
                    src={picture}
                    alt="profile"
                />
            </div>
            <h3 className="text-xl font-bold text-center">{name}</h3>
            <p className="font-bold text-center">Rating: {rating}</p>
            <p className="text-xl text-center">{review}</p>
        </div>
    );
};

export default Reviews;
