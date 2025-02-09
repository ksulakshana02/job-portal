import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import {
    clearAllJobErrors,
    deleteJob,
    getMyJobs,
    resetJobSlice,
} from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";

const MyJobs = () => {
    const {loading, error, myJobs, message} = useSelector(
        (state) => state.jobs
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllJobErrors());
        }
        if (message) {
            toast.success(message);
            dispatch(resetJobSlice());
        }
        dispatch(getMyJobs());
    }, [dispatch, error, message]);

    const handleDeleteJob = (id) => {
        dispatch(deleteJob(id));
    };

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : myJobs && myJobs.length <= 0 ? (
                <h1 className="text-xl font-semibold text-gray-700 text-center">
                    You have not posted any job!
                </h1>
            ) : (
                <div className="account_components p-8">
                    {/* Heading */}
                    <h3 className="text-3xl font-semibold text-yellow-400 mb-6">My Jobs</h3>

                    {/* Applications Container */}
                    <div className="applications_container space-y-8">
                        {myJobs.map((element) => (
                            <div
                                key={element._id}
                                className="card bg-gray-200 p-6 rounded-md shadow-md"
                            >
                                {/* Job Title */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Job Title:</span> {element.title}
                                </p>

                                {/* Job Niche */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Job Niche:</span>{" "}
                                    {element.jobNiche}
                                </p>

                                {/* Salary */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Salary:</span> {element.salary}
                                </p>

                                {/* Location */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Location:</span>{" "}
                                    {element.location}
                                </p>

                                {/* Job Type */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Job Type:</span> {element.jobType}
                                </p>

                                {/* Company Name */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Company Name:</span>{" "}
                                    {element.companyName}
                                </p>

                                {/* Introduction */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Introduction:</span>{" "}
                                    {element.introduction}
                                </p>

                                {/* Qualifications */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Qualifications:</span>{" "}
                                    {element.qualifications}
                                </p>

                                {/* Responsibilities */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Responsibilities:</span>{" "}
                                    {element.responsibilities}
                                </p>

                                {/* What Are We Offering (Optional) */}
                                {element.offers && (
                                    <p className="sub-sec flex items-center gap-2 text-gray-700">
                                        <span className="font-bold">What Are We Offering:</span>{" "}
                                        {element.offers}
                                    </p>
                                )}

                                {/* Delete Button */}
                                <button
                                    className="btn bg-yellow-400 text-black font-medium px-6 py-2 rounded-md hover:bg-black hover:text-white transition-transform duration-300 w-fit"
                                    onClick={() => handleDeleteJob(element._id)}
                                >
                                    Delete Job
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MyJobs;