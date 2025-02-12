import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    FaSquareXTwitter,
    FaSquareInstagram,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
    const { isAuthenticated } = useSelector((state) => state.user);

    return (
        <>
            <footer className="flex flex-wrap bg-gray-900 border-b border-gray-400 p-5 md:p-10">
                <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/4 mb-8">
                    <img src="/logo.png" alt="logo" className="w-[270px] md:w-[200px]" />
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-0 md:px-5">
                    <h4 className="text-2xl font-bold tracking-wide text-white mb-5">
                        Support
                    </h4>
                    <ul className="flex flex-col gap-3 text-gray-300">
                        <li>Street No.007 Shahrah-e-Faisal Karachi, Pakistan</li>
                        <li>nichenest@gmail.com</li>
                        <li>+92 3106507521</li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-0 md:px-5">
                    <h4 className="text-2xl font-bold tracking-wide text-white mb-5">
                        Quick Links
                    </h4>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/jobs" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                                Jobs
                            </Link>
                        </li>
                        {isAuthenticated && (
                            <li>
                                <Link to="/dashboard" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                                    Dashboard
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-0 md:px-5">
                    <h4 className="text-2xl font-bold tracking-wide text-white mb-5">
                        Follow Us
                    </h4>
                    <ul className="flex flex-col gap-3">
                        {[
                            { icon: <FaSquareXTwitter />, name: "Twitter (X)" },
                            { icon: <FaSquareInstagram />, name: "Instagram" },
                            { icon: <FaYoutube />, name: "Youtube" },
                            { icon: <FaLinkedin />, name: "LinkedIn" },
                        ].map((social) => (
                            <li key={social.name}>
                                <Link to="/" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                                    <span className="flex">{social.icon}</span>
                                    <span>{social.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>

            <div className="flex justify-center text-center bg-gray-900 text-gray-500 p-5 font-light">
                &copy; CopyRight 2025. All Rights Reserved By kSulakshana
            </div>
        </>
    );
};

export default Footer;