import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {
    clearAllApplicationErrors,
    resetApplicationSlice,
    deleteApplication,
    fetchJobSeekerApplications,
} from "../store/slices/applicationSlice";
import Spinner from "../components/Spinner";

const MyApplications = () => {
    const {user, isAuthenticated} = useSelector((state) => state.user);
    const {loading, error, applications, message} = useSelector(
        (state) => state.applications
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobSeekerApplications());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllApplicationErrors());
        }
        if (message) {
            toast.success(message);
            dispatch(resetApplicationSlice());
            dispatch(fetchJobSeekerApplications());
        }
    }, [dispatch, error, message]);

    const handleDeleteApplication = (id) => {
        dispatch(deleteApplication(id));
    };

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : applications && applications.length <= 0 ? (
                <h1 className="text-xl font-semibold text-gray-700 text-center">
                    You have not applied for any job.
                </h1>
            ) : (
                <div className="account_components p-8">
                    {/* Heading */}
                    <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
                        My Applications For Jobs
                    </h3>

                    {/* Applications Container */}
                    <div className="applications_container space-y-8">
                        {applications.map((element) => (
                            <div
                                key={element._id}
                                className="card bg-gray-200 p-6 rounded-md shadow-md"
                            >
                                {/* Job Title */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Job Title:</span>{" "}
                                    {element.jobInfo.jobTitle}
                                </p>

                                {/* Applicant's Name */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Name:</span>{" "}
                                    {element.jobSeekerInfo.name}
                                </p>

                                {/* Applicant's Email */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Email:</span>{" "}
                                    {element.jobSeekerInfo.email}
                                </p>

                                {/* Applicant's Phone */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Phone:</span>{" "}
                                    {element.jobSeekerInfo.phone}
                                </p>

                                {/* Applicant's Address */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Address:</span>{" "}
                                    {element.jobSeekerInfo.address}
                                </p>

                                {/* Applicant's Cover Letter */}
                                <p className="sub-sec flex flex-col gap-2 text-gray-700">
                                    <span className="font-bold">Cover Letter:</span>
                                    <textarea
                                        value={element.jobSeekerInfo.coverLetter}
                                        rows={5}
                                        disabled
                                        className="bg-gray-100 text-gray-700 p-2 rounded-md resize-none"
                                    ></textarea>
                                </p>

                                {/* Buttons */}
                                <div className="btn-wrapper flex justify-end gap-4 mt-4">
                                    {/* Delete Button */}
                                    <button
                                        className="outline_btn bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-transform duration-300"
                                        onClick={() => handleDeleteApplication(element._id)}
                                    >
                                        Delete Application
                                    </button>

                                    {/* View Resume Button */}
                                    <Link
                                        to={
                                            element.jobSeekerInfo &&
                                            element.jobSeekerInfo.resume.url
                                        }
                                        target="_blank"
                                        className="btn bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-transform duration-300"
                                    >
                                        View Resume
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MyApplications;