import { Routes, Route } from "react-router-dom";
// import Login from "../User_Based_Login/Login.jsx";
import Home from "../User_Based_Login/Home.jsx";
import UserRegistration from "../User_Based_Login/UserRegistration.jsx";
import UserLogin from "../User_Based_Login/UserLogin.jsx";
import LandingPage from "../Landing/Landing_Page.jsx";
import ErrorPage from "../Landing/Error_Page.jsx";
import Dashboard from "../UserDashboard/Dashboard.jsx";
import Header from "../Layout/Header.jsx";
import UserDashboard_Route from "../UserDashboard/UserDashboard_Route.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="/userlogin" element={<Login />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/userregistration" element={<UserRegistration />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/header" element={<Header />} />
            <Route path="/UserDashboard_Route/*" element={<UserDashboard_Route />} />
            {/* UserDashboard_Route/* */}


        </Routes>
    );
}

export default AppRouter;