import React, { useEffect, useState } from "react";

const BlogCard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log(data);
    return (
        <div className="mx-auto max-w-7xl mt-10">
            {data.map((blog) => (
                // <p>{blog.blog.description}</p>
                <div className="border">
                    <div className="">
                        <p>{blog.author.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCard;
