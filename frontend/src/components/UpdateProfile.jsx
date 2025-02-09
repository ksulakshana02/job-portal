import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {
    clearAllUpdateProfileErrors,
    updateProfile,
} from "../store/slices/updateProfileSlice";
import {toast} from "react-toastify";
import {getUser} from "../store/slices/userSlice";

const UpdateProfile = () => {
    const {user} = useSelector((state) => state.user);
    const {loading, error, isUpdated} = useSelector(
        (state) => state.updateProfile
    );
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [address, setAddress] = useState(user?.address || "");
    const [coverLetter, setCoverLetter] = useState(user?.coverLetter || "");
    const [firstNiche, setFirstNiche] = useState(user?.niches?.firstNiche || "");
    const [secondNiche, setSecondNiche] = useState(user?.niches?.secondNiche || "");
    const [thirdNiche, setThirdNiche] = useState(user?.niches?.thirdNiche || "");
    const [resume, setResume] = useState(null);
    const [resumePreview, setResumePreview] = useState(user?.resume?.url || "");

    const handleUpdateProfile = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);

        if (user?.role === "Job Seeker") {
            formData.append("firstNiche", firstNiche);
            formData.append("secondNiche", secondNiche);
            formData.append("thirdNiche", thirdNiche);
            formData.append("coverLetter", coverLetter);
        }

        if (resume) {
            formData.append("resume", resume);
        }

        dispatch(updateProfile(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUpdateProfileErrors());
        }
        if (isUpdated) {
            toast.success("Profile Updated.");
            dispatch(getUser());
            dispatch(clearAllUpdateProfileErrors());
        }
    }, [dispatch, loading, error, isUpdated, user]);

    const resumeHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setResumePreview(reader.result);
            setResume(file);
        };
    };

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

    return (
        <div className="account_components p-8">
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Update Profile</h3>

            {/* Full Name Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
            </div>

            {/* Email Address Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
            </div>

            {/* Phone Number Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
            </div>

            {/* Address Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
            </div>

            {/* Job Niches (Conditional Rendering for Job Seekers) */}
            {user?.role === "Job Seeker" && (
                <>
                    {/* Preferred Job Niches */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">
                            My Preferred Job Niches
                        </label>
                        <div className="flex flex-col gap-4">
                            <select
                                value={firstNiche}
                                onChange={(e) => setFirstNiche(e.target.value)}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                            >
                                {nichesArray.map((element, index) => (
                                    <option value={element} key={index}>
                                        {element}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={secondNiche}
                                onChange={(e) => setSecondNiche(e.target.value)}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                            >
                                {nichesArray.map((element, index) => (
                                    <option value={element} key={index}>
                                        {element}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={thirdNiche}
                                onChange={(e) => setThirdNiche(e.target.value)}
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                            >
                                {nichesArray.map((element, index) => (
                                    <option value={element} key={index}>
                                        {element}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Cover Letter</label>
                        <textarea
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            rows={5}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                        />
                    </div>

                    {/* Resume Upload */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
                        <input
                            type="file"
                            onChange={resumeHandler}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                        />
                        {user?.resume && (
                            <div className="mt-4">
                                <p className="text-gray-700 font-medium">Current Resume:</p>
                                <Link
                                    to={user.resume.url}
                                    target="_blank"
                                    className="view-resume bg-black text-white px-4 py-2 rounded-md inline-block mt-2"
                                >
                                    View Resume
                                </Link>
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* Save Changes Button */}
            <div className="save_change_btn_wrapper flex justify-end">
                <button
                    className={`btn ${
                        loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-yellow-400 hover:bg-black hover:text-white"
                    } text-black font-medium px-6 py-2 rounded-md transition-transform duration-300`}
                    onClick={handleUpdateProfile}
                    disabled={loading}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default UpdateProfile;