import React from 'react'

export const Header = () => {
    return (
        <>
            <div><h1>Header</h1>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/userregistration">Register</a></li>
                        <li><a href="/userlogin">Login</a></li>
                        <li><a href="/">Landing Page</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header;

