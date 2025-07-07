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
import Signup from "../User_Based_Login/Signup.jsx";
import Home from "../User_Based_Login/Home.jsx";
import Dashboard from "../Admin/Dashboard/Dashboard.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/loginform" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRouter;