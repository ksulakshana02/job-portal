import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
    return (
        <section className="py-12 px-5 md:px-28 flex flex-col justify-center items-center gap-12 bg-yellow-400">
            <h3 className="text-3xl font-semibold text-gray-900 uppercase">
                How does it work?
            </h3>

            <div className="flex flex-col gap-8 w-full">
                {[
                    {
                        icon: <LuUserPlus />,
                        title: "Create an Account",
                        description: "Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or applying for jobs. Customize your profile to highlight your skills or requirements."
                    },
                    {
                        icon: <VscTasklist />,
                        title: "Post or Browse Jobs",
                        description: "Employers can post detailed job descriptions, and job seekers can browse a comprehensive list of available positions. Utilize filters to find jobs that match your skills and preferences."
                    },
                    {
                        icon: <BiSolidLike />,
                        title: "Hire or Get Hired",
                        description: "Employers can shortlist candidates and extend job offers. Job seekers can review job offers and accept positions that align with their career goals."
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 md:p-12 flex flex-col gap-4 rounded-lg transition-all duration-300 hover:-translate-y-3 hover:bg-gray-900 hover:text-white"
                    >
                        <div className="w-fit bg-gray-900 p-3 rounded-full flex justify-center items-center transition-all duration-300 group-hover:bg-white">
              <span className="text-4xl text-white group-hover:text-gray-900">
                {item.icon}
              </span>
                        </div>
                        <h4 className="text-2xl font-medium">
                            {item.title}
                        </h4>
                        <p className="text-gray-500 group-hover:text-gray-300">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;