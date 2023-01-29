import React, { useEffect, useState } from "react";

const BlogCard = ({ blog }) => {
    const tags = blog.blog.tags;
    console.log(blog.blog.tags);
    // console.log(data);
    tags.map((tag) => console.log(tag));
    return (
        <div className={`border rounded-lg overflow-hidden  `}>
            {/* <div className=""> */}
            <img
                className="h-48 w-full bg-cover border-0"
                src={blog.blog.image}
                alt=""
            />
            <div className="px-3">
                <div className="flex items-center gap-5 pt-3 ">
                    {/* <img
                        className="h-10 w-10 rounded-full"
                        src={blog.author.image}
                        alt=""
                    /> */}
                    <div className="flex flex-col">
                        <h2 className="text-md font-semibold">
                            {blog.blog.title}
                        </h2>

                        <h4 className="text-sm  text-gray-900">
                            by {blog.author.name}
                        </h4>
                        {/* <span className="text-sm text-gray-500">
                            {blog.blog.publishedDate}
                        </span> */}
                        {/* <p className="text-sm">{blog.author.name}</p> */}
                    </div>
                </div>

                <div>
                    {tags.map((tag) => {
                        return (
                            <button
                                className="text-xxs font-semibold mr-1 mt-1 px-1 py-0.5 bg-red-500 rounded-sm text-white"
                                key={tag}
                            >
                                {tag}
                            </button>
                        );
                    })}
                </div>
                <p className="text-sm text-gray-500 py-2 ">
                    {blog.blog.description.slice(0, 200)}...
                    <span className="font-semibold text-gray-400">
                        see more
                    </span>
                </p>
                {/* <button>See more</button> */}
            </div>

            {/* </div> */}
        </div>
    );
};

export default BlogCard;
