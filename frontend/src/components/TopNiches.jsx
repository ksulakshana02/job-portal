import React from "react";

const TopNiches = () => {
    const services = [
        {
            id: 1,
            service: "Software Development",
            description: "Innovative software development services to build, maintain, and upgrade applications, ensuring they meet the highest quality standards.",
        },
        {
            id: 2,
            service: "Web Development",
            description: "Comprehensive web development solutions from front-end design to back-end integration, delivering responsive and user-friendly websites.",
        },
        {
            id: 3,
            service: "Data Science",
            description: "Advanced data science services to analyze and interpret complex data, providing actionable insights and data-driven solutions.",
        },
        {
            id: 4,
            service: "Cloud Computing",
            description: "Reliable cloud computing services to manage, store, and process data efficiently, offering scalable and flexible cloud solutions.",
        },
        {
            id: 5,
            service: "DevOps",
            description: "DevOps services to streamline software development and operations, enhancing deployment efficiency and reducing time to market.",
        },
        {
            id: 6,
            service: "Mobile App Development",
            description: "Expert mobile app development for iOS and Android platforms, creating intuitive and engaging mobile experiences for your users.",
        },
    ];

    return (
        <section className="py-12 px-5 md:px-28 flex flex-col justify-center items-center gap-12">
            <h3 className="text-3xl font-semibold text-yellow-400 uppercase">
                Top Niches
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                {services.map((element) => (
                    <div
                        key={element.id}
                        className="bg-gray-900 text-white flex flex-col gap-4 p-8 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900"
                    >
                        <h4 className="font-semibold uppercase">
                            {element.service}
                        </h4>
                        <p className="group-hover:text-gray-800">
                            {element.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopNiches;