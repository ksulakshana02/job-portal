import React from "react";
import {useSelector} from "react-redux";

const MyProfile = () => {
    const {user} = useSelector((state) => state.user);

    return (
        <div className="account_components p-8">
            {/* Heading */}
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">My Profile</h3>

            {/* Full Name Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                    type="text"
                    disabled
                    value={user?.name || ""}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                />
            </div>

            {/* Email Address Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                    type="email"
                    disabled
                    value={user?.email || ""}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                />
            </div>

            {/* Preferred Job Niches (Conditional Rendering for Job Seekers) */}
            {user?.role === "Job Seeker" && (
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                        My Preferred Job Niches
                    </label>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            disabled
                            value={user?.niches?.firstNiche || ""}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                        />
                        <input
                            type="text"
                            disabled
                            value={user?.niches?.secondNiche || ""}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                        />
                        <input
                            type="text"
                            disabled
                            value={user?.niches?.thirdNiche || ""}
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                        />
                    </div>
                </div>
            )}

            {/* Phone Number Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                    type="number"
                    disabled
                    value={user?.phone || ""}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                />
            </div>

            {/* Address Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input
                    type="text"
                    disabled
                    value={user?.address || ""}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                />
            </div>

            {/* Role Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Role</label>
                <input
                    type="text"
                    disabled
                    value={user?.role || ""}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                />
            </div>

            {/* Joined On Field */}
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Joined On</label>
                <input
                    type="text"
                    disabled
                    value={user?.createdAt || ""}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2 cursor-not-allowed"
                />
            </div>
        </div>
    );
};

export default MyProfile;