import React from "react";
import { Link } from "react-router-dom";

const linkStyle = "font-semibold hover:text-gray-500 transition";
const Navbar = () => {
    return (
        <nav className="bg-gray-300 ">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-3 py-3">
                {/* logo  */}
                <h1 className="text-4xl font-bold">Bloggers</h1>
                {/* primary nav */}
                <div className=" ">
                    {/* <div href="/">Reading History</div> */}
                    <Link to="/blogs" className={`mr-4 ${linkStyle}`}>
                        Home
                    </Link>
                    <Link to="/blogs/history" className={`${linkStyle}`}>
                        Reading History
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
