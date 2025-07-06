// import React from 'react';

// export const Login = () => {
//     return (
//         <div>
//             <h2> Login form will go here </h2>
//         </div>
//     );
// };

// export default Login;

import React from "react";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/auth/login", formData);
            const token = response.data.access_token;
            localStorage.setItem("token", token);
            setMsg("Login successful!");
        } catch (error) {
            console.error(error);
            setMsg("Login failed.");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>{msg}</p>
        </div>
    );
}
export default Login;