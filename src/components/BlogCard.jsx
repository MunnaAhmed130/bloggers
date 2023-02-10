import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ blog }) => {
    const tags = blog.blog.tags;
    console.log(blog.blog.tags);
    // console.log(data);
    const desciption = ` ${blog.blog.description.slice(
        0,
        100
    )} ... **see more**`;

    // [![IMAGE ALT TEXT HERE](https://miro.medium.com/max/720/1*HpjP8_3UEIB3ePU3f3ssaA.webp)](https://youtu.be/C4wm-p_VFh0)
    return (
        <div>
            <div className={`border overflow-hidden`}>
                <Link to={`/blog/${blog.blog.title}`}>
                    <img
                        className="h-52 w-full  border-0"
                        src={blog.blog.image}
                        alt=""
                    />
                </Link>
                <div className="px-3 py-3 flex">
                    <div>
                        <img
                            className="w-14 h-14 rounded-full bg-gray-200"
                            src={blog.author.image}
                            alt=""
                        />
                    </div>
                    <div className="pl-3 tracking-wide">
                        <Link to="">
                            <h4 className="text-md font-semibold text-gray-900">
                                {blog.author.name}
                            </h4>
                        </Link>
                        <div>
                            <span className="text-sm">
                                {blog.blog.publishedDate}
                            </span>
                            <BsDot className="inline" />
                            <span className="text-sm">
                                {blog.blog.readTime} min read
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pl-3">
                    {tags.map((tag) => {
                        return (
                            <button
                                className={` text-xxs font-medium mr-1 mt-1 px-2 py-1  rounded-full text-white bg-gray-300 `}
                                key={tag}
                                onClick={() => console.log(tag)}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
                <div className="px-3 py-2">
                    <div className="flex items-center gap-5 font-sans">
                        {/* <img
                        className="h-10 w-10 rounded-full"
                        src={blog.author.image}
                        alt=""
                    /> */}
                        <div className="flex flex-col">
                            <Link to="">
                                <h2 className="text-xl font-semibold">
                                    {blog.blog.title}
                                </h2>
                            </Link>

                            {/* <span className="text-sm text-gray-500">
                            {blog.blog.publishedDate}
                        </span> */}
                            {/* <p className="text-sm">{blog.author.name}</p> */}
                        </div>
                    </div>
                    {/* <div>
                        {tags.map((tag) => {
                            return (
                                <button
                                    className={`
                                ${tag === "Science" && "bg-blue-800"}
                                ${tag === "Technology" && "bg-blue-900"}
                                ${tag === "Health" && "bg-green-800"}
                                ${tag === "Space" && "bg-gray-700"}
                                ${tag === "Space Exploration" && "bg-gray-600"}
                                 text-xxs font-semibold mr-1 mt-1 px-1 py-0.5  rounded-sm text-white`}
                                    key={tag}
                                    onClick={() => console.log(tag)}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div> */}

                    <div className="font-serif">
                        {blog.blog.subtitle && (
                            <p className="text-xl">{blog.blog.subtitle}</p>
                        )}
                        {!blog.blog.subtitle && (
                            <ReactMarkdown className="text-lg   text-gray-700 py-2   m-1">
                                {desciption}
                            </ReactMarkdown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
