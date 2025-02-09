import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {clearAllUserErrors, register} from "../store/slices/userSlice";
import {toast} from "react-toastify";
import {FaAddressBook, FaPencilAlt, FaRegUser} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";
import {MdCategory, MdOutlineMailOutline} from "react-icons/md";
import {RiLock2Fill} from "react-icons/ri";

const Register = () => {
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [firstNiche, setFirstNiche] = useState("");
    const [secondNiche, setSecondNiche] = useState("");
    const [thirdNiche, setThirdNiche] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [resume, setResume] = useState("");

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

    const resumeHandler = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    const {loading, isAuthenticated, error, message} = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("role", role);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("password", password);
        if (role === "Job Seeker") {
            formData.append("firstNiche", firstNiche);
            formData.append("secondNiche", secondNiche);
            formData.append("thirdNiche", thirdNiche);
            formData.append("coverLetter", coverLetter);
            formData.append("resume", resume);
        }
        dispatch(register(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUserErrors());
        }
        if (isAuthenticated) {
            navigateTo("/");
        }
    }, [dispatch, error, loading, isAuthenticated, message]);

    return (
        <>
            <section className="authPage flex min-h-screen bg-white">
                {/* Container */}
                <div className="container max-w-[620px] mx-auto p-8">
                    {/* Header */}
                    <div className="header text-center mb-8">
                        <h3 className="text-2xl font-semibold">Create a new account</h3>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleRegister} className="flex flex-col gap-6">
                        {/* Role Selection */}
                        <div className="wrapper flex gap-4">
                            <div className="inputTag flex-1">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Register As
                                </label>
                                <div className="relative flex items-center">
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                    >
                                        <option value="">Select Role</option>
                                        <option value="Employer">Register as an Employer</option>
                                        <option value="Job Seeker">Register as a Job Seeker</option>
                                    </select>
                                    <FaRegUser
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                </div>
                            </div>
                            <div className="inputTag flex-1">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                    />
                                    <FaPencilAlt
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                </div>
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="wrapper flex gap-4">
                            <div className="inputTag flex-1">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email Address
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        type="email"
                                        placeholder="youremail@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                    />
                                    <MdOutlineMailOutline
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                </div>
                            </div>
                            <div className="inputTag flex-1">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Phone Number
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        type="number"
                                        placeholder="111-222-333"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                    />
                                    <FaPhoneFlip
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                </div>
                            </div>
                        </div>

                        {/* Address and Password */}
                        <div className="wrapper flex gap-4">
                            <div className="inputTag flex-1">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Address
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Your Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                    />
                                    <FaAddressBook
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                </div>
                            </div>
                            <div className="inputTag flex-1">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                    />
                                    <RiLock2Fill
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                </div>
                            </div>
                        </div>

                        {/* Niches for Job Seekers */}
                        {role === "Job Seeker" && (
                            <>
                                <div className="wrapper flex flex-col gap-4">
                                    <div className="inputTag">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Your First Niche
                                        </label>
                                        <div className="relative flex items-center">
                                            <select
                                                value={firstNiche}
                                                onChange={(e) => setFirstNiche(e.target.value)}
                                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                            >
                                                <option value="">Your Niche</option>
                                                {nichesArray.map((niche, index) => (
                                                    <option key={index} value={niche}>
                                                        {niche}
                                                    </option>
                                                ))}
                                            </select>
                                            <MdCategory
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                        </div>
                                    </div>
                                    <div className="inputTag">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Your Second Niche
                                        </label>
                                        <div className="relative flex items-center">
                                            <select
                                                value={secondNiche}
                                                onChange={(e) => setSecondNiche(e.target.value)}
                                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                            >
                                                <option value="">Your Niche</option>
                                                {nichesArray.map((niche, index) => (
                                                    <option key={index} value={niche}>
                                                        {niche}
                                                    </option>
                                                ))}
                                            </select>
                                            <MdCategory
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                        </div>
                                    </div>
                                    <div className="inputTag">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Your Third Niche
                                        </label>
                                        <div className="relative flex items-center">
                                            <select
                                                value={thirdNiche}
                                                onChange={(e) => setThirdNiche(e.target.value)}
                                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                            >
                                                <option value="">Your Niche</option>
                                                {nichesArray.map((niche, index) => (
                                                    <option key={index} value={niche}>
                                                        {niche}
                                                    </option>
                                                ))}
                                            </select>
                                            <MdCategory
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Cover Letter */}
                                <div className="wrapper">
                                    <div className="inputTag">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Cover Letter
                                        </label>
                                        <div>
                      <textarea
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                          rows={10}
                          className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                      />
                                        </div>
                                    </div>
                                </div>

                                {/* Resume */}
                                <div className="wrapper">
                                    <div className="inputTag">
                                        <label className="block text-gray-700 font-medium mb-2">
                                            Resume
                                        </label>
                                        <div>
                                            <input
                                                type="file"
                                                onChange={resumeHandler}
                                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn w-full bg-yellow-400 text-black font-medium py-2 rounded-md transition-transform duration-300 ${
                                loading ? "bg-gray-500 cursor-not-allowed" : "hover:bg-black hover:text-white"
                            }`}
                        >
                            Register
                        </button>

                        {/* Login Link */}
                        <Link
                            to="/login"
                            className="text-center text-yellow-400 font-medium hover:text-black transition-colors duration-300"
                        >
                            Login Now
                        </Link>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Register;