import React from "react";
import { BsTwitter, BsLinkedin, BsFacebook, BsThreeDots } from "react-icons/bs";
import { ImLink } from "react-icons/im";

const AuthorInfo = ({ author }) => {
    const iconStyle = "mr-3";
    return (
        <div className=" mx-10 my-10 font-sans">
            <div className=" flex">
                <img
                    src={author.image}
                    className="border rounded-full w-24"
                    alt=""
                />
                <div className="pl-5  w-full flex flex-col justify-center">
                    <h2 className="font-semibold text-lg">{author.name}</h2>
                    <span className="text-gray-400 ">
                        {author.followersCount} followers
                    </span>
                    <div className="flex flex-row my-2 text-gray-500">
                        <BsTwitter className={iconStyle} />
                        <BsFacebook className={iconStyle} />
                        <BsLinkedin className={iconStyle} />
                        <ImLink className={iconStyle} />
                        <BsThreeDots className={iconStyle} />
                    </div>
                </div>
            </div>
            <p>{author.about}</p>
        </div>
    );
};

export default AuthorInfo;
