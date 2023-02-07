import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../../Hooks/useData";

import "./Blog.css";
import BlogInfo from "../../../components/BlogInfo";
import AuthorInfo from "../../../components/AuthorInfo";
// import useData from "../../Hooks/useData";

const Blog = () => {
    const text = useParams();
    const data = useData();
    console.log(data);
    console.log(text);

    return (
        <div>
            {data
                .filter((blog) => blog.blog.title === text.title)
                .map((blog) => (
                    <div className="grid grid-cols-3 max-w-7xl mx-auto">
                        <div className="col-span-2">
                            <BlogInfo blog={blog.blog} />
                        </div>
                        <div className="col-span-1">
                            <AuthorInfo author={blog.author} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Blog;
