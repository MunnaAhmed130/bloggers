import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../Hooks/useData";
// import useData from "../../Hooks/useData";

const Blog = () => {
    const text = useParams();
    const data = useData();
    // console.log(data);
    // console.log(text);
    data.map((blog) => console.log(blog));
    return <div>lol</div>;
};

export default Blog;
