import React from "react";

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center min-h-[800px] gap-12 px-5 mx-auto">
            <h1 className="text-5xl font-bold uppercase">
                Find Your Dream Job Today
            </h1>

            <h4 className="text-2xl font-medium text-gray-500">
                Connecting Talent with Opportunities Across the Nation for Every Skill Level
            </h4>

            <div className="max-w-[900px] text-center bg-yellow-400 text-gray-900 px-16 py-12 rounded-[35px] tracking-wide font-medium transition-all duration-300 hover:translate-y-[-10px] hover:bg-gray-900 hover:text-white">
                Explore a vast array of job listings in diverse industries. Whether you&#39;re a seasoned professional or just starting out, find the perfect role to advance your career. Our platform makes job searching easy and efficient, bringing you closer to your next big opportunity.
            </div>
        </section>
    );
};

export default Hero;