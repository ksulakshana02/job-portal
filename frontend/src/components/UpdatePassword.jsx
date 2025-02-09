import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    clearAllUpdateProfileErrors,
    updatePassword,
} from "../store/slices/updateProfileSlice";
import {getUser} from "../store/slices/userSlice";
import {FaRegEyeSlash, FaEye} from "react-icons/fa";
import {toast} from "react-toastify";

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {loading, error, isUpdated} = useSelector(
        (state) => state.updateProfile
    );
    const dispatch = useDispatch();

    const handleUpdatePassword = () => {
        const formData = new FormData();
        formData.append("oldPassword", oldPassword);
        formData.append("newPassword", newPassword);
        formData.append("confirmPassword", confirmPassword);
        dispatch(updatePassword(formData));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearAllUpdateProfileErrors());
        }
        if (isUpdated) {
            toast.success("Password Updated");
            dispatch(getUser());
            dispatch(clearAllUpdateProfileErrors());
        }
    }, [dispatch, loading, error, isUpdated]);

    return (
        <div className="account_components update_password_component p-8">
            {/* Heading */}
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Update Password
            </h3>

            {/* Current Password Field */}
            <div className="relative mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Current Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
                {showPassword ? (
                    <FaRegEyeSlash
                        className="absolute bottom-3 right-4 text-xl cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                ) : (
                    <FaEye
                        className="absolute bottom-3 right-4 text-xl cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>

            {/* New Password Field */}
            <div className="relative mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    New Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
                {showPassword ? (
                    <FaRegEyeSlash
                        className="absolute bottom-3 right-4 text-xl cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                ) : (
                    <FaEye
                        className="absolute bottom-3 right-4 text-xl cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                    Confirm Password
                </label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
                />
                {showPassword ? (
                    <FaRegEyeSlash
                        className="absolute bottom-3 right-4 text-xl cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                ) : (
                    <FaEye
                        className="absolute bottom-3 right-4 text-xl cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>

            {/* Update Password Button */}
            <div className="save_change_btn_wrapper flex justify-end">
                <button
                    className={`btn ${
                        loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-yellow-400 hover:bg-black hover:text-white"
                    } text-black font-medium px-6 py-2 rounded-md transition-transform duration-300`}
                    onClick={handleUpdatePassword}
                    disabled={loading}
                >
                    Update Password
                </button>
            </div>
        </div>
    );
};

export default UpdatePassword;