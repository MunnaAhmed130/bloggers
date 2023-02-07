import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const BlogInfo = ({ blog }) => {
    const description = blog.description;

    return (
        <div className="px-20 py-7 font-sans border-r ">
            <h2 className="font-bold tracking-tight text-[32px] leading-[3rem] pb-2">
                {blog.title}
            </h2>
            <h3 className=" tracking-tight text-2xl text-gray-500">
                {blog.subtitle}
            </h3>
            <figure className="my-8">
                <img className="" src={blog.image} alt="title image" />
                <figcaption className="">
                    <ReactMarkdown className="text-center text-[14px]  text-gray-500 mt-3">
                        {blog.imageCaption}
                    </ReactMarkdown>
                </figcaption>
            </figure>
            <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeHighlight]}
                className={`whitespace-pre-line font-serif leading-9 description
            ${
                blog.firstLetter &&
                "first-letter:text-[4.5rem] first-letter:leading-[1] first-letter:float-left first-letter:mr-2 first-letter"
            }
            `}
            >
                {/* {blog.blog.firstLetter && (
                <span>{blog.blog.firstLetter}</span>
            )} */}
                {/* {blog.blog.description} */}
            </ReactMarkdown>
        </div>
    );
};

export default BlogInfo;
