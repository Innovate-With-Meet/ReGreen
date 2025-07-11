
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { AdminLanding } from "./AdminLanding";
// import { ProfilePage } from "./Dashboard/ProfilePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { AllUsers } from "./ManageUsers/AllUsers";
// import { AllEmpUsers } from "./ManageUsers/AllEmpUsers";
// import { Categorymanage } from "./ManageCategorys/Categorymanage";
// import { AdminAnalytics } from "./AdminAnalytics/AdminAnalytics";
import userlogin from "../User_Based_Login/UserLogin.jsx";
import Dashboard from "../UserDashboard/Dashboard.jsx";
import Navbar from "../Layout/Navbar.jsx";
import Sidebar from "../Layout/Sidebar.jsx";
import LandingPage from "./LandingPage.jsx";


import Navbartest from "../Layout/Navbartest.jsx";
// import Drawer from "../Layout/Drawer.jsx";

export const UserDashboard_Route = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Static token logic: Skip token validation for now
        const token = "static-token"; // Static token for testing purposes
        if (!token) {
            navigate("/userlogin"); // Redirect to login if no token
        }
    }, [navigate]);

    return (
        <Routes>
            {/* <Route path="/" element={<AdminLanding />} />
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/categorymanage" element={<Categorymanage />} />
            <Route path="/adminanalytics" element={<AdminAnalytics />} />
            <Route path="/allempUsers" element={<AllEmpUsers />} />
            <Route path="/AdminAnalytics" element={<AdminAnalytics />} /> */}
            <Route path="/UserDashboard" element={<Dashboard />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/LandingPage" element={<LandingPage />} />

            <Route path="/Navbartest" element={<Navbartest />} />
            {/* <Route path="/Drawer" element={<Drawer />} /> */}

        </Routes>
    );
};

export default UserDashboard_Route;