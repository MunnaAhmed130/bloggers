import React from "react";
import { BsTwitter, BsLinkedin, BsFacebook, BsThreeDots } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { RxEnvelopeClosed } from "react-icons/rx";

const AuthorInfo = ({ author }) => {
    const iconStyle = "mr-3";
    return (
        <div className=" mx-10 py-10 font-sans sticky top-0">
            <div className="flex">
                <img
                    src={author.image}
                    className="border rounded-full w-24"
                    alt=""
                />
                <div className="pl-5  w-full flex flex-col justify-center">
                    <h2 className="font-medium text-lg">{author.name}</h2>
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
            <p className="mt-5 text-gray-400">{author.about}</p>
            <div className="flex mt-5">
                <button className="px-5 py-2 rounded-full bg-gray-800 text-white mr-2">
                    Follow
                </button>
                <button className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-800 text-white">
                    <RxEnvelopeClosed />
                </button>
            </div>
        </div>
    );
};

export default AuthorInfo;
