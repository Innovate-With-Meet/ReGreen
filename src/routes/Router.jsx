// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
// import NotFound from "../pages/NotFound";

// export default function AppRouter() {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="*" element={<NotFound />} />
//         </Routes>
//     );
// }

import { Routes, Route } from "react-router-dom";
import Login from "../User_Based_Login/Login.jsx";
import Home from "../User_Based_Login/Home.jsx";
import UserRegistration from "../User_Based_Login/UserRegistration.jsx";
import UserLogin from "../User_Based_Login/UserLogin.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/userlogin" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/userregistration" element={<UserRegistration />} />
            <Route path="/userlogin" element={<UserLogin />} />

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
    );
}

export default AppRouter;