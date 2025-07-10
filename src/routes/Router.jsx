import { Routes, Route } from "react-router-dom";
import Login from "../User_Based_Login/Login.jsx";
import Home from "../User_Based_Login/Home.jsx";
import UserRegistration from "../User_Based_Login/UserRegistration.jsx";
import UserLogin from "../User_Based_Login/UserLogin.jsx";
import LandingPage from "../Landing/Landing_Page.jsx";
import ErrorPage from "../Landing/Error_Page.jsx";
import Dashboard from "../UserAdmin/jsx/Dashboard/Dashboard.jsx";
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


            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
    );
}

export default AppRouter;