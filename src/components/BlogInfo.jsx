import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import style from "../style";

const BlogInfo = ({ blog }) => {
    const description = blog.description;

    const title =
        "font-bold tracking-tight sm:text-[32px] text-3xl sm:leading-10 leading-10 pb-2 ";

    const subtitle = "tracking-tight sm:text-2xl text-xl  text-gray-500";

    const firstLetterStyle =
        "first-letter:text-[4.5rem] first-letter:leading-[1] first-letter:float-left first-letter:mr-2 ";

    return (
        <div className={` blog__container  py-7 font-sans max-w-2xl w-xl `}>
            <h2 className={title}>{blog.title}</h2>
            <h3 className={subtitle}>{blog.subtitle}</h3>
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
                className={`whitespace-pre-line font-serif sm:leading-9 sm:text-xl text-lg description ${
                    blog.firstLetter && `${firstLetterStyle}`
                }`}
            />
        </div>
    );
};

export default BlogInfo;
