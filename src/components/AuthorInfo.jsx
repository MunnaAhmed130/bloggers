import React from "react";

const AuthorInfo = ({ author }) => {
    return (
        <div>
            <img src={author.image} alt="" />
        </div>
    );
};

export default AuthorInfo;
