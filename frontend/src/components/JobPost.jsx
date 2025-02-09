import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {
    clearAllJobErrors,
    postJob,
    resetJobSlice,
} from "../store/slices/jobSlice";
import {CiCircleInfo} from "react-icons/ci";

const JobPost = () => {
    const [title, setTitle] = useState("");
    const [jobType, setJobType] = useState("");
    const [location, setLocation] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [offers, setOffers] = useState("");
    const [jobNiche, setJobNiche] = useState("");
    const [salary, setSalary] = useState("");
    const [hiringMultipleCandidates, setHiringMultipleCandidates] = useState("");
    const [personalWebsiteTitle, setPersonalWebsiteTitle] = useState("");
    const [personalWebsiteUrl, setPersonalWebsiteUrl] = useState("");

    const nichesArray = [
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

    const cities = [
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

    const {isAuthenticated, user} = useSelector((state) => state.user);
    const {loading, error, message} = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    const handlePostJob = (e) => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("jobType", jobType);
        formData.append("location", location);
        formData.append("companyName", companyName);
        formData.append("introduction", introduction);
        formData.append("responsibilities", responsibilities);
        formData.append("qualifications", qualifications);
        offers && formData.append("offers", offers);
        formData.append("jobNiche", jobNiche);
        formData.append("salary", salary);
        hiringMultipleCandidates &&
        formData.append("hiringMultipleCandidates", hiringMultipleCandidates);
        personalWebsiteTitle &&
        formData.append("personalWebsiteTitle", personalWebsiteTitle);
        personalWebsiteUrl &&
        formData.append("personalWebsiteUrl", personalWebsiteUrl);
        dispatch(postJob(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllJobErrors());
        }
        if (message) {
            toast.success(message);
            dispatch(resetJobSlice());
        }
    }, [dispatch, error, loading, message]);

    return (
        <div className="account_components p-8">
            {/* Heading */}
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">Post A Job</h3>

            {/* Title Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Job Title"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Job Type Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Job Type</label>
                <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                >
                    <option value="">Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                </select>
            </div>

            {/* Location Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Location (City)
                </label>
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                >
                    <option value="">Select Location</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            {/* Company Name Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Company Name
                </label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company Name"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Company/Job Introduction Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Company/Job Introduction
                </label>
                <textarea
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    placeholder="Company / Job Introduction"
                    rows={7}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400 resize-none"
                />
            </div>

            {/* Responsibilities Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Responsibilities
                </label>
                <textarea
                    value={responsibilities}
                    onChange={(e) => setResponsibilities(e.target.value)}
                    placeholder="Job Responsibilities"
                    rows={7}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400 resize-none"
                />
            </div>

            {/* Qualifications Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Qualifications
                </label>
                <textarea
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                    placeholder="Required Qualifications For Job"
                    rows={7}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400 resize-none"
                />
            </div>

            {/* What We Offer Field */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-medium">What We Offer</label>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
            <CiCircleInfo/> Optional
          </span>
                </div>
                <textarea
                    value={offers}
                    onChange={(e) => setOffers(e.target.value)}
                    placeholder="What are we offering in return!"
                    rows={7}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400 resize-none"
                />
            </div>

            {/* Job Niche Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Job Niche</label>
                <select
                    value={jobNiche}
                    onChange={(e) => setJobNiche(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                >
                    <option value="">Select Job Niche</option>
                    {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>
                            {niche}
                        </option>
                    ))}
                </select>
            </div>

            {/* Salary Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Salary</label>
                <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="50000 - 800000"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Hiring Multiple Candidates Field */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-medium">
                        Hiring Multiple Candidates?
                    </label>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
            <CiCircleInfo/> Optional
          </span>
                </div>
                <select
                    value={hiringMultipleCandidates}
                    onChange={(e) => setHiringMultipleCandidates(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                >
                    <option value="">Hiring Multiple Candidates?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            {/* Personal Website Name Field */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-medium">
                        Personal Website Name
                    </label>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
            <CiCircleInfo/> Optional
          </span>
                </div>
                <input
                    type="text"
                    value={personalWebsiteTitle}
                    onChange={(e) => setPersonalWebsiteTitle(e.target.value)}
                    placeholder="Personal Website Name/Title"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Personal Website Link Field */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <label className="block text-gray-700 font-medium">
                        Personal Website Link (URL)
                    </label>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
            <CiCircleInfo/> Optional
          </span>
                </div>
                <input
                    type="text"
                    value={personalWebsiteUrl}
                    onChange={(e) => setPersonalWebsiteUrl(e.target.value)}
                    placeholder="Personal Website Link (URL)"
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
            </div>

            {/* Post Job Button */}
            <div className="flex justify-center">
                <button
                    className={`btn bg-yellow-400 text-black font-medium px-6 py-2 rounded-md transition-transform duration-300 hover:bg-black hover:text-white ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handlePostJob}
                    disabled={loading}
                >
                    Post Job
                </button>
            </div>
        </div>
    );
};

export default JobPost;