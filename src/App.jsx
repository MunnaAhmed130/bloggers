import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./layout/Main/Navbar";
import { FcSearch } from "react-icons/fc";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

export const BLOG_CONTEXT = createContext();

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    const value = { data, setData };
    return (
        <div className="">
            <BLOG_CONTEXT.Provider value={value}>
                <RouterProvider router={routes} />
            </BLOG_CONTEXT.Provider>
            {/* <div className="flex items-center h-7 pl-2 rounded bg-white">
                <input className=" rounded outline-0" type="text" />
                <button className=" px-2 ">
                    <FcSearch />
                </button>
            </div> */}
        </div>
    );
}

export default App;
