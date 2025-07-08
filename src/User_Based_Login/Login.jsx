import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

export const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic here
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#f5f5f5",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: 350,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};

export default LoginPage;