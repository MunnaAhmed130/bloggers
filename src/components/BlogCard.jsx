import React, { useEffect, useState } from "react";

const BlogCard = ({ blog }) => {
    const tags = blog.blog.tags;
    console.log(blog.blog.tags);
    // console.log(data);
    tags.map((tag) => console.log(tag));
    return (
        <div className="border px-3">
            {/* <div className=""> */}
            <div className="flex items-center gap-5 pt-5">
                <img
                    className="h-10 w-10 rounded-full"
                    src={blog.author.image}
                    alt=""
                />
                <div className="flex flex-col">
                    <p className="text-lg">{blog.author.name}</p>

                    {/* <p className="text-sm">{blog.author.name}</p> */}
                </div>
            </div>
            <div>
                {tags.map((tag) => {
                    return (
                        <button
                            className="text-xxs mr-1 mt-4 px-1 py-0.5 bg-red-500 rounded-sm text-white"
                            key={tag}
                        >
                            {tag}
                        </button>
                    );
                })}
            </div>
            <p className="text-sm text-gray-500 py-2 ">
                {blog.blog.description.slice(0, 200)}...
            </p>
            {/* </div> */}
        </div>
    );
};

export default BlogCard;
