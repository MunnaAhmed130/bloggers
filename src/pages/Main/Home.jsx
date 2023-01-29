import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div className="mx-auto max-w-7xl mt-10 grid grid-cols-3 gap-5 p-4">
            {data.map((blog) => (
                <BlogCard blog={blog} />
            ))}
        </div>
    );
};

export default Home;
