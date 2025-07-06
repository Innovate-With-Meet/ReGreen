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

export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/loginform" element={<Login />} />

        </Routes >
    )
}

export default AppRouter;