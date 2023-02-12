import React, { useContext, useEffect, useState } from "react";
import { BLOG_CONTEXT } from "../../App";
import BlogCard from "../../components/BlogCard";
import useData from "../../Hooks/useData";

const Home = () => {
    // const data = useData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("/blogs.json")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);
    const { data } = useContext(BLOG_CONTEXT);
    console.log(data);
    return (
        <div className="mx-auto max-w-7xl mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 p-4">
            {data.map((blog) => (
                <BlogCard blog={blog} key={blog.blog.title} />
            ))}
        </div>
    );
};

export default Home;
