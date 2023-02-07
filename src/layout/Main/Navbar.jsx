import React from "react";
import { Link } from "react-router-dom";

const linkStyle = "hover:text-black text-gray-500 transition";
const Navbar = () => {
    return (
        <nav className=" border">
            <div className="flex justify-between items-center  px-10 py-3">
                {/* logo */}
                <h1 className="text-4xl font-bold">Bloggers</h1>
                {/* primary nav */}
                <div className=" ">
                    {/* <div href="/">Reading History</div> */}
                    <Link to="/home" className={`mr-4 ${linkStyle}`}>
                        Home
                    </Link>
                    <Link to="/history" className={`${linkStyle}`}>
                        Reading History
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
