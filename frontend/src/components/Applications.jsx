import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {
    clearAllApplicationErrors,
    deleteApplication,
    fetchEmployerApplications,
    resetApplicationSlice,
} from "../store/slices/applicationSlice";
import Spinner from "./Spinner";
import {Link} from "react-router-dom";

const Applications = () => {
    const {applications, loading, error, message} = useSelector(
        (state) => state.applications
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllApplicationErrors());
        }
        if (message) {
            toast.success(message);
            dispatch(resetApplicationSlice());
        }
        dispatch(fetchEmployerApplications());
    }, [dispatch, error, message]);

    const handleDeleteApplication = (id) => {
        dispatch(deleteApplication(id));
    };

    return (
        <>
            {loading ? (
                <Spinner/>
            ) : applications && applications.length <= 0 ? (
                <h1 className="text-center text-2xl font-medium text-gray-700">
                    You have no applications from job seekers.
                </h1>
            ) : (
                <div className="account_components p-8">
                    {/* Heading */}
                    <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
                        Applications For Your Posted Jobs
                    </h3>

                    {/* Applications Container */}
                    <div className="applications_container space-y-8">
                        {applications.map((element) => (
                            <div
                                key={element._id}
                                className="card bg-gray-300 p-6 rounded-md shadow-md"
                            >
                                {/* Job Title */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Job Title:</span>{" "}
                                    {element.jobInfo.jobTitle}
                                </p>

                                {/* Applicant's Name */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Applicant&#39;s Name:</span>{" "}
                                    {element.jobSeekerInfo.name}
                                </p>

                                {/* Applicant's Email */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Applicant&#39;s Email:</span>{" "}
                                    {element.jobSeekerInfo.email}
                                </p>

                                {/* Applicant's Phone */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Applicant&#39;s Phone:</span>{" "}
                                    {element.jobSeekerInfo.phone}
                                </p>

                                {/* Applicant's Address */}
                                <p className="sub-sec flex items-center gap-2 text-gray-700">
                                    <span className="font-bold">Applicant&#39;s Address:</span>{" "}
                                    {element.jobSeekerInfo.address}
                                </p>

                                {/* Applicant's Cover Letter */}
                                <p className="sub-sec flex flex-col gap-2 text-gray-700">
                                    <span className="font-bold">Applicant&#39;s Cover Letter:</span>
                                    <textarea
                                        value={element.jobSeekerInfo.coverLetter}
                                        rows={5}
                                        disabled
                                        className="bg-gray-200 text-gray-700 p-2 rounded-md resize-none"
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

export default Applications;