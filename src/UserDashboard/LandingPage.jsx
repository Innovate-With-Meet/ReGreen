import React from 'react';
import { Navbar } from '../Layout/Navbar';
import { Sidebar } from '../Layout/Sidebar';
// import { MainComponents } from './Pages/MainComponents';
// import { Latest } from './Pages/Latest';
import { Box } from '@mui/material';

export const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        mt: '48px', // same as navbar height
                        ml: '60px', // default sidebar width
                    }}
                >
                    {/* Your main content */}
                    <h1>Welcome to Dashboard</h1>
                </Box>
            </Box>
        </>);
};

export default LandingPage;