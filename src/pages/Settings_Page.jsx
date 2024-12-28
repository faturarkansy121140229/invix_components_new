import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import UserEditDataButton from "../components/UserEditDataButton";
import UserEditPasswordButton from "../components/UserEditPasswordButton";

const Settings = () => {
    const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div
                className="w-full max-w-xs md:max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8"
                style={{ maxWidth: isLg ? "500px" : "100%" }}
            >
                <h3 className="text-center text-lg font-semibold text-gray-700 mb-6">
                    Account Settings
                </h3>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-4">
                        <img
                            src="/images/user.png"
                            alt="user profile"
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800">
                        Fatur Arkan Syawalva
                    </h4>
                    <p className="text-sm text-gray-500">fatur@gmail.com</p>
                    <div className="w-full mt-6">
                        <ul className="space-y-4">
                            <UserEditDataButton />
                            <UserEditPasswordButton />
                            <li
                                className="flex items-center justify-between p-3 bg-red-100 text-red-500 rounded-lg cursor-pointer hover:bg-red-200"
                                onClick={() => navigate("/logout")}
                            >
                                <div className="flex items-center gap-2">
                                    <img src="/images/logout.svg" alt="edit icon" className="w-5 h-5" />
                                    <span>Logout</span>
                                </div>
                                <span className="text-red-500">&gt;</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
