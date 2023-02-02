import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../../Hooks/useData";
import ReactMarkdown from "react-markdown";
import "./Blog.css";
// import useData from "../../Hooks/useData";

const Blog = () => {
    const text = useParams();
    const data = useData();
    console.log(data);
    console.log(text);
    return (
        <div className="grid grid-cols-3 max-w-7xl mx-auto">
            <div className="col-span-2">
                {/* {data
                    .filter((blog) => blog.blog.title === text.title)
                    .map((blog) => (
                        <div>
                            {blog.blog.description.map((description) => (
                                <p
                                    className={`whitespace-pre-line mx-10 my-5
                        ${
                            blog.blog.firstLetter &&
                            "first-letter:text-5xl first-letter:float-left"
                        }
                        `}
                                >
                                    {description}
                                </p>
                            ))}
                        </div>
                    
                    ) )
                    } */}
                {data
                    .filter((blog) => blog.blog.title === text.title)
                    .map((blog) => (
                        <div className="mx-10 my-5">
                            <h2>{blog.blog.title}</h2>
                            <ReactMarkdown
                                className={`whitespace-pre-line 
                        ${
                            blog.blog.firstLetter &&
                            "first-letter:text-5xl first-letter:float-left"
                        }
                        `}
                            >
                                {blog.blog.description}
                            </ReactMarkdown>
                        </div>
                    ))}
            </div>
            <div className="col-span-1">sidebar</div>
        </div>
    );
};

export default Blog;
