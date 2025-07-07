import * as React from "react";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormLabel,
    FormControl,
    Link,
    TextField,
    Typography,
    Card as MuiCard,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";

// Custom styled Card
const Card = styled(MuiCard)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "480px",
    padding: theme.spacing(4),
    borderRadius: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    boxShadow:
        "0 8px 24px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1)", // Stronger shadow
    backdropFilter: "blur(6px)",
}));

export default function Signup() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState("");

    const validateInputs = () => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const name = document.getElementById("name");

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage("");
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage("Password must be at least 6 characters long.");
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage("");
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage("Name is required.");
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage("");
        }

        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateInputs()) return;

        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");

        try {
            const response = await axios.post("http://localhost:8000/user", {
                name,
                email,
                password,
            });
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        //   url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1950&q=80')
        `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
            }}
        >
            <Card>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{
                        width: "100%",
                        fontWeight: 600,
                        mb: 2,
                        textAlign: "center",
                        color: "primary.main",
                    }}
                >
                    Create Your Account
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
                >
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <TextField
                            id="name"
                            name="name"
                            fullWidth
                            placeholder="John Doe"
                            error={nameError}
                            helperText={nameErrorMessage}
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            fullWidth
                            placeholder="your@email.com"
                            error={emailError}
                            helperText={emailErrorMessage}
                            variant="outlined"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••"
                            fullWidth
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            variant="outlined"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={(e) => {
                                        const pass = document.getElementById("password");
                                        pass.type = e.target.checked ? "text" : "password";
                                    }}
                                />
                            }
                            label="Show password"
                        />
                    </FormControl>

                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="I want to receive updates via email."
                    />

                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
                        Sign Up
                    </Button>
                </Box>

                <Divider sx={{ my: 3 }} />

                <Typography sx={{ textAlign: "center", fontSize: "0.9rem" }}>
                    Already have an account?{" "}
                    <Link href="/loginform" underline="hover" color="primary">
                        Sign in
                    </Link>
                </Typography>
            </Card>
        </Box>
    );
}
