import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {clearAllUserErrors, login} from "../store/slices/userSlice";
import {toast} from "react-toastify";
import {FaRegUser} from "react-icons/fa";
import {MdOutlineMailOutline} from "react-icons/md";
import {RiLock2Fill} from "react-icons/ri";

const Login = () => {
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading, isAuthenticated, error} = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();
    const navigateTo = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("role", role);
        formData.append("email", email);
        formData.append("password", password);
        dispatch(login(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUserErrors());
        }
        if (isAuthenticated) {
            navigateTo("/");
        }
    }, [dispatch, error, loading, isAuthenticated]);

    return (
        <>
            <section className="authPage flex min-h-screen bg-white">
                {/* Container */}
                <div className="container login-container flex-1 max-w-[620px] mx-auto p-8">
                    {/* Header */}
                    <div className="header text-center mb-8">
                        <h3 className="text-2xl font-semibold">Login to your account</h3>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="flex flex-col gap-6">
                        {/* Role Selection */}
                        <div className="inputTag">
                            <label className="block text-gray-700 font-medium mb-2">
                                Login As
                            </label>
                            <div className="relative flex items-center">
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 pr-10"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Employer">Login as an Employer</option>
                                    <option value="Job Seeker">Login as a Job Seeker</option>
                                </select>
                                <FaRegUser
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"/>
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="inputTag">
                            <label className="block text-gray-700 font-medium mb-2">
                                Email
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

                        {/* Password Input */}
                        <div className="inputTag">
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`btn w-full bg-yellow-400 text-black font-medium py-2 rounded-md transition-transform duration-300 ${
                                loading ? "bg-gray-500 cursor-not-allowed" : "hover:bg-black hover:text-white"
                            }`}
                        >
                            Login
                        </button>

                        {/* Register Link */}
                        <Link
                            to="/register"
                            className="text-center text-yellow-400 font-medium hover:text-black transition-colors duration-300"
                        >
                            Register Now
                        </Link>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;