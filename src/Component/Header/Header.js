import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            <nav className="h-10 w-full fixed top-0 bg-slate-900 text-white flex justify-center items-center font-bold z-10">
                <Link className="mr-8" to="/">
                    Home
                </Link>
                <Link className="mr-8" to="/reviews">
                    Reviews
                </Link>
                <Link className="mr-8" to="/dashboard">
                    DashBoard
                </Link>
                <Link className="mr-8" to="/blogs">
                    Blogs
                </Link>
                <Link className="mr-8" to="/about">
                    About
                </Link>
            </nav>
        </div>
    );
};

export default Header;
