import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
// import useData from "../../Hooks/useData";

const Blog = () => {
    const text = useParams();
    const data = useData();
    console.log(data);
    console.log(text);
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                {data
                    .filter((blog) => blog.blog.title === text.title)
                    .map((blog) => (
                        <p
                            className={`whitespace-pre-line mx-10 my-5
                        ${
                            blog.blog.firstLetter &&
                            "first-letter:text-5xl first-letter:float-left"
                        }
                        `}
                        >
                            {/* {blog.blog.firstLetter && (
                                <span className="first-letter:text-5xl float-left">
                                    {blog.blog.firstLetter}
                                </span>
                            )} */}
                            {blog.blog.description}
                        </p>
                    ))}
            </div>
            <div className="col-span-1">sidebar</div>
        </div>
    );
};

export default Blog;
