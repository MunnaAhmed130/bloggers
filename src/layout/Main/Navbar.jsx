import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-300 ">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-3 py-3">
                {/* logo  */}
                <h1 className="text-4xl font-bold">Bloggers</h1>
                {/* primary nav */}

                <div className=" ">
                    {/* <div href="/">Reading History</div> */}
                    <Link to="/" className="mr-5 ">
                        Home
                    </Link>
                    <Link to="/history">Reading History</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
