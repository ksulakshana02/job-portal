import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            {/* Content Container */}
            <div className="flex flex-col items-center gap-12 text-center">
                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-gray-900">
                    404 Not Found
                </h1>

                {/* Paragraph */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-700">
                    Your visited page not found. You may go to the home page.
                </p>

                {/* Button */}
                <Link
                    to="/"
                    className="inline-block bg-yellow-400 text-gray-900 font-medium py-3 px-6 rounded-md transition-transform duration-300 hover:-translate-y-1 hover:bg-black hover:text-white"
                >
                    Back to Home Page
                </Link>
            </div>
        </section>
    );
};

export default NotFound;