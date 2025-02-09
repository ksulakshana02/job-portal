import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    clearAllApplicationErrors,
    postApplication,
    resetApplicationSlice,
} from "../store/slices/applicationSlice";
import {toast} from "react-toastify";
import {fetchSingleJob} from "../store/slices/jobSlice";
import {IoMdCash} from "react-icons/io";
import {FaToolbox} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

const PostApplication = () => {
    const {singleJob} = useSelector((state) => state.jobs);
    const {isAuthenticated, user} = useSelector((state) => state.user);
    const {loading, error, message} = useSelector(
        (state) => state.applications
    );
    const {jobId} = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [resume, setResume] = useState("");
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const handlePostApplication = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("coverLetter", coverLetter);
        if (resume) {
            formData.append("resume", resume);
        }
        dispatch(postApplication(formData, jobId));
    };

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setPhone(user.phone || "");
            setAddress(user.address || "");
            setCoverLetter(user.coverLetter || "");
            setResume((user.resume && user.resume.url) || "");
        }
        if (error) {
            toast.error(error);
            dispatch(clearAllApplicationErrors());
        }
        if (message) {
            toast.success(message);
            dispatch(resetApplicationSlice());
        }
        dispatch(fetchSingleJob(jobId));
    }, [dispatch, error, message, jobId, user]);

    let qualifications = [];
    let responsibilities = [];
    let offering = [];
    if (singleJob.qualifications) {
        qualifications = singleJob.qualifications.split(". ");
    }
    if (singleJob.responsibilities) {
        responsibilities = singleJob.responsibilities.split(". ");
    }
    if (singleJob.offers) {
        offering = singleJob.offers.split(". ");
    }

    const resumeHandler = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    return (
        <>
            <article className="application_page flex min-h-screen bg-white p-8">
                {/* Form */}
                <form className="flex-1 max-w-[620px]">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                        Application Form
                    </h3>

                    {/* Job Title */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Job Title
                        </label>
                        <input
                            type="text"
                            placeholder={singleJob.title}
                            disabled
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                        />
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    {/* Cover Letter */}
                    {user && user.role === "Job Seeker" && (
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">
                                Cover Letter
                            </label>
                            <textarea
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                rows={10}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>
                    )}

                    {/* Resume */}
                    {user && user.role === "Job Seeker" && (
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">
                                Resume
                            </label>
                            <input
                                type="file"
                                onChange={resumeHandler}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                            />
                        </div>
                    )}

                    {/* Apply Button */}
                    {isAuthenticated && user.role === "Job Seeker" && (
                        <div className="flex justify-end">
                            <button
                                className={`btn w-fit bg-yellow-400 text-black font-medium py-2 px-4 rounded-md transition-transform duration-300 ${
                                    loading ? "bg-gray-500 cursor-not-allowed" : "hover:bg-black hover:text-white"
                                }`}
                                onClick={handlePostApplication}
                                disabled={loading}
                            >
                                Apply
                            </button>
                        </div>
                    )}
                </form>

                {/* Job Details */}
                <div className="job-details flex-1 ml-8">
                    {/* Header */}
                    <header className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-700">
                            {singleJob.title}
                        </h3>
                        {singleJob.personalWebsite && (
                            <Link
                                target="_blank"
                                to={singleJob.personalWebsite.url}
                                className="text-yellow-400 hover:text-black transition-colors duration-300 block"
                            >
                                {singleJob.personalWebsite.title}
                            </Link>
                        )}
                        <p className="text-gray-600">{singleJob.location}</p>
                        <p className="text-gray-600">Rs. {singleJob.salary} a month</p>
                    </header>

                    <hr className="my-4"/>

                    {/* Section */}
                    <section className="space-y-6">
                        {/* Job Details Wrapper */}
                        <div className="wrapper space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700">Job Details</h3>
                            <div className="flex items-center gap-4">
                                <IoMdCash size={24} className="text-yellow-400"/>
                                <div>
                                    <span className="text-gray-600">Pay</span>
                                    <span className="block text-gray-700 font-medium">
                    Rs. {singleJob.salary} a month
                  </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaToolbox size={24} className="text-yellow-400"/>
                                <div>
                                    <span className="text-gray-600">Job Type</span>
                                    <span className="block text-gray-700 font-medium">
                    {singleJob.jobType}
                  </span>
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        {/* Location Wrapper */}
                        <div className="wrapper space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700">Location</h3>
                            <div className="flex items-center gap-2">
                                <FaLocationDot size={24} className="text-yellow-400"/>
                                <span className="text-gray-700">{singleJob.location}</span>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        {/* Full Job Description */}
                        <div className="wrapper space-y-4">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Full Job Description
                            </h3>
                            <p className="text-gray-600">{singleJob.introduction}</p>

                            {/* Qualifications */}
                            {singleJob.qualifications && (
                                <div>
                                    <h4 className="text-md font-medium text-gray-700">Qualifications</h4>
                                    <ul className="list-inside text-gray-600">
                                        {qualifications.map((element, index) => (
                                            <li key={index}>{element}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Responsibilities */}
                            {singleJob.responsibilities && (
                                <div>
                                    <h4 className="text-md font-medium text-gray-700">Responsibilities</h4>
                                    <ul className="list-inside text-gray-600">
                                        {responsibilities.map((element, index) => (
                                            <li key={index}>{element}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Offering */}
                            {singleJob.offers && (
                                <div>
                                    <h4 className="text-md font-medium text-gray-700">Offering</h4>
                                    <ul className="list-inside text-gray-600">
                                        {offering.map((element, index) => (
                                            <li key={index}>{element}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </section>

                    <hr className="my-4"/>

                    {/* Footer */}
                    <footer>
                        <h3 className="text-lg font-semibold text-gray-700">Job Niche</h3>
                        <p className="text-gray-600">{singleJob.jobNiche}</p>
                    </footer>
                </div>
            </article>
        </>
    );
};

export default PostApplication;