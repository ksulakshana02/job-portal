import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {clearAllJobErrors, fetchJobs} from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";

const Jobs = () => {
    const [city, setCity] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [niche, setNiche] = useState("");
    const [selectedNiche, setSelectedNiche] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const {jobs, loading, error} = useSelector((state) => state.jobs);

    const handleCityChange = (city) => {
        setCity(city);
        setSelectedCity(city);
    };

    const handleNicheChange = (niche) => {
        setNiche(niche);
        setSelectedNiche(niche);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllJobErrors());
        }
        dispatch(fetchJobs(city, niche, searchKeyword));
    }, [dispatch, error, city, niche]);

    const handleSearch = () => {
        dispatch(fetchJobs(city, niche, searchKeyword));
    };


    const cities = [
        "All",
        "Karachi",
        "Lahore",
        "Islamabad",
        "Rawalpindi",
        "Faisalabad",
        "Multan",
        "Hyderabad",
        "Quetta",
        "Peshawar",
        "Sialkot",
        "Gujranwala",
        "Sargodha",
        "Bahawalpur",
        "Sukkur",
        "Mardan",
        "Mingora",
        "Sheikhupura",
        "Mandi Bahauddin",
        "Larkana",
        "Nawabshah",
    ];

    const nichesArray = [
        "All",
        "Software Development",
        "Web Development",
        "Cybersecurity",
        "Data Science",
        "Artificial Intelligence",
        "Cloud Computing",
        "DevOps",
        "Mobile App Development",
        "Blockchain",
        "Database Administration",
        "Network Administration",
        "UI/UX Design",
        "Game Development",
        "IoT (Internet of Things)",
        "Big Data",
        "Machine Learning",
        "IT Project Management",
        "IT Support and Helpdesk",
        "Systems Administration",
        "IT Consulting",
    ];

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : (
                <section className="py-10 px-4 sm:px-6 lg:px-28 min-h-screen">
                    {/* Search Bar */}
                    <div className="flex justify-center relative mb-8">
                        <input
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Search for jobs..."
                            className="w-full sm:w-[750px] px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-yellow-400"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-black hover:text-white transition-transform duration-300"
                        >
                            Find Job
                        </button>
                        <FaSearch className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-500"/>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Filter Sidebar */}
                        <div className="md:w-1/4">
                            <div className="flex flex-col gap-10">
                                {/* City Filter */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl font-medium text-gray-900">Filter Job By City</h2>
                                    {cities.map((city, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id={city}
                                                name="city"
                                                value={city}
                                                checked={selectedCity === city}
                                                onChange={() => handleCityChange(city)}
                                                className="accent-yellow-400"
                                            />
                                            <label htmlFor={city} className="text-gray-700">
                                                {city}
                                            </label>
                                        </div>
                                    ))}
                                </div>

                                {/* Niche Filter */}
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl font-medium text-gray-900">Filter Job By Niche</h2>
                                    {nichesArray.map((niche, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                id={niche}
                                                name="niche"
                                                value={niche}
                                                checked={selectedNiche === niche}
                                                onChange={() => handleNicheChange(niche)}
                                                className="accent-yellow-400"
                                            />
                                            <label htmlFor={niche} className="text-gray-700">
                                                {niche}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div className="md:w-3/4">
                            {/* Mobile Filters */}
                            <div className="flex flex-wrap gap-4 mb-8 md:hidden">
                                <select
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                                >
                                    <option value="">Filter By City</option>
                                    {cities.map((city, index) => (
                                        <option value={city} key={index}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    value={niche}
                                    onChange={(e) => setNiche(e.target.value)}
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-400"
                                >
                                    <option value="">Filter By Niche</option>
                                    {nichesArray.map((niche, index) => (
                                        <option value={niche} key={index}>
                                            {niche}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Job Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {jobs && jobs.length > 0 ? (
                                    jobs.map((element) => (
                                        <div
                                            key={element._id}
                                            className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:bg-gray-200"
                                        >
                                            {element.hiringMultipleCandidates === "Yes" ? (
                                                <p className="text-green-600 bg-green-100 px-2 py-1 rounded-md w-fit">
                                                    Hiring Multiple Candidates
                                                </p>
                                            ) : (
                                                <p className="text-blue-600 bg-blue-100 px-2 py-1 rounded-md w-fit">
                                                    Hiring
                                                </p>
                                            )}
                                            <p className="text-xl font-semibold mt-2">{element.title}</p>
                                            <p className="text-gray-600">{element.companyName}</p>
                                            <p className="text-gray-600">{element.location}</p>
                                            <p className="text-gray-600">
                                                <span className="font-medium">Salary:</span> Rs. {element.salary}
                                            </p>
                                            <p className="text-gray-600">
                                                <span className="font-medium">Posted On:</span>{" "}
                                                {element.jobPostedOn.substring(0, 10)}
                                            </p>
                                            <div className="mt-4">
                                                <Link
                                                    to={`/post/application/${element._id}`}
                                                    className="inline-block bg-yellow-400 text-black font-medium px-4 py-2 rounded-md hover:bg-black hover:text-white transition-transform duration-300"
                                                >
                                                    Apply Now
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <img
                                        src="./notfound.png"
                                        alt="job-not-found"
                                        className="w-full h-auto"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Jobs;