import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {logout, clearAllUserErrors} from "../store/slices/userSlice";
import {LuMoveRight} from "react-icons/lu";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import MyJobs from "../components/MyJobs";
import JobPost from "../components/JobPost";
import Applications from "../components/Applications";
import MyApplications from "../components/MyApplications";

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [componentName, setComponentName] = useState("My Profile");
    const {loading, isAuthenticated, error, user} = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logged out successfully.");
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUserErrors());
        }
        if (!isAuthenticated) {
            navigateTo("/");
        }
    }, [dispatch, error, loading, isAuthenticated]);

    return (
        <>
            <section className="account p-8 min-h-screen">
                {/* Component Header */}
                <div className="component_header flex justify-between items-center mb-6">
                    <p className="text-gray-700 font-medium">Dashboard</p>
                    <p className="text-gray-700 font-medium">
                        Welcome! <span className="text-yellow-400">{user?.name}</span>
                    </p>
                </div>

                {/* Main Container */}
                <div className="container flex">
                    {/* Sidebar */}
                    <div
                        className={`sidebar ${
                            show ? "w-[308px] bg-black text-white" : "w-[252px]"
                        } transition-all duration-300`}
                    >
                        <ul className="sidebar_links flex flex-col gap-4">
                            <h4 className="text-xl font-semibold text-yellow-400 mb-5">
                                Manage Account
                            </h4>
                            <li>
                                <button
                                    onClick={() => {
                                        setComponentName("My Profile");
                                        setShow(!show);
                                    }}
                                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                >
                                    My Profile
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setComponentName("Update Profile");
                                        setShow(!show);
                                    }}
                                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                >
                                    Update Profile
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setComponentName("Update Password");
                                        setShow(!show);
                                    }}
                                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                >
                                    Update Password
                                </button>
                            </li>
                            {user?.role === "Employer" && (
                                <>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setComponentName("Job Post");
                                                setShow(!show);
                                            }}
                                            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            Post New Job
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setComponentName("My Jobs");
                                                setShow(!show);
                                            }}
                                            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            My Jobs
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setComponentName("Applications");
                                                setShow(!show);
                                            }}
                                            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            Applications
                                        </button>
                                    </li>
                                </>
                            )}
                            {user?.role === "Job Seeker" && (
                                <li>
                                    <button
                                        onClick={() => {
                                            setComponentName("My Applications");
                                            setShow(!show);
                                        }}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                                    >
                                        My Applications
                                    </button>
                                </li>
                            )}
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Banner */}
                    <div className="banner flex-1 ml-8">
                        {/* Sidebar Toggle Icon */}
                        <div
                            className={`sidebar_icon ${
                                show ? "bg-white" : "bg-black"
                            } w-fit p-2 rounded-full cursor-pointer transition-all duration-300 relative left-[-18px] z-10`}
                        >
                            <LuMoveRight
                                onClick={() => setShow(!show)}
                                className={`${
                                    show ? "rotate-180" : "rotate-0"
                                } text-2xl transition-transform duration-300 ${
                                    show ? "text-black" : "text-white"
                                }`}
                            />
                        </div>

                        {/* Dynamic Component Rendering */}
                        {(() => {
                            switch (componentName) {
                                case "My Profile":
                                    return <MyProfile/>;
                                case "Update Profile":
                                    return <UpdateProfile/>;
                                case "Update Password":
                                    return <UpdatePassword/>;
                                case "Job Post":
                                    return <JobPost/>;
                                case "My Jobs":
                                    return <MyJobs/>;
                                case "Applications":
                                    return <Applications/>;
                                case "My Applications":
                                    return <MyApplications/>;
                                default:
                                    return <MyProfile/>;
                            }
                        })()}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;