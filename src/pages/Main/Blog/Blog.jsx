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
                        <div className="mx-20 my-7 font-sans ">
                            <h2 className="font-bold tracking-tight text-[32px] leading-[3rem] pb-2">
                                {blog.blog.title}
                            </h2>
                            <h3 className=" tracking-tight text-2xl text-gray-500">
                                {blog.blog.subtitle}
                            </h3>
                            <figure className="my-8">
                                <img
                                    className=""
                                    src={blog.blog.image}
                                    alt=""
                                />
                                <figcaption className="">
                                    <ReactMarkdown className="text-center text-[14px]  text-gray-500 mt-3">
                                        {blog.blog.imageCaption}
                                    </ReactMarkdown>
                                </figcaption>
                            </figure>

                            <ReactMarkdown
                                className={`whitespace-pre-line font-serif text-xl leading-9 description
                        ${
                            blog.blog.firstLetter &&
                            "first-letter:text-[4.5rem] first-letter:leading-[1] first-letter:float-left first-letter:mr-2 first-letter"
                        }
                        `}
                            >
                                {/* {blog.blog.firstLetter && (
                                    <span>{blog.blog.firstLetter}</span>
                                )} */}
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
