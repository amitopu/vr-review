import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <main>
            <div className="mx-auto flex justify-start mt-16">
                <div className="description w-1/2 ml-16 flex flex-wrap">
                    <h1 className="text-5xl font-bold mt-28 ml-10">
                        Go Begind The Horign!!
                    </h1>
                    <h2 className="text-4xl font-bold mt-5 ml-10 text-fuchsia-700">
                        Explore the edge of space!!
                    </h2>
                    <p className="mt-4 text-xl text-justify pl-10 pr-20">
                        We know you care about budget and quality. We are here
                        to help you taking best decisions. Get the best headset
                        in the market by getting real reviews from real
                        customers. All our reviews are from real customers who
                        purchased from our vendors.
                    </p>
                    <button className="h-10 w-40 rounded mt-4 ml-10 bg-fuchsia-700 text-white font-bold">
                        Live Demo
                    </button>
                </div>
                <div className="image">
                    <img
                        src="images/vr.png"
                        alt="A person wearing vr headset and enjoing"
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;
