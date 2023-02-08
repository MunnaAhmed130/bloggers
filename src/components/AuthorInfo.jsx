import React from "react";
import { BsTwitter, BsLinkedin, BsFacebook, BsThreeDots } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { RxEnvelopeClosed } from "react-icons/rx";

const AuthorInfo = ({ author }) => {
    const iconStyle = "mr-2 py-1.5 px-1";
    return (
        <div className=" mx-8 py-10 font-sans sticky top-0">
            <div className="flex">
                <img
                    src={author.image}
                    className="border rounded-full w-24"
                    alt=""
                />
                <div className="pl-5  w-full flex flex-col justify-center">
                    <h2 className="font-medium text-lg">{author.name}</h2>
                    <span>
                        <a
                            href="/"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            {author.followersCount} followers
                        </a>
                    </span>

                    <div className="flex flex-row  text-slate-500">
                        <button className={iconStyle}>
                            <BsTwitter />
                        </button>
                        <button className={iconStyle}>
                            <BsFacebook />
                        </button>
                        <button className={iconStyle}>
                            <BsLinkedin />
                        </button>
                        <button className={iconStyle}>
                            <ImLink />
                        </button>
                        <button className={iconStyle}>
                            <BsThreeDots />
                        </button>
                    </div>
                </div>
            </div>
            <p className="mt-5 text-gray-500 text-sm">{author.about}</p>
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
