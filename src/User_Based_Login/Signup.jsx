import React, { useState } from 'react';
import {
    Box,
    Container,
    Paper,
    TextField,
    Button,
    Typography,
    Grid,
    IconButton,
    InputAdornment,
    Alert,
    CircularProgress,
    Divider,
    Link
} from '@mui/material';
import {
    Visibility,
    VisibilityOff,
    Person,
    Email,
    Lock,
    Phone,
    Google,
    Facebook,
    Twitter
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// for the whole page 
const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: 550
}));
// for the text box

// .> '===================================
const StyledTextField = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: 10,
        // redius of the text box
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
        },
        '&.Mui-focused': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            boxShadow: '0 0 0 2px rgba(102, 126, 234, 0.2)',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#333',
        fontWeight: 500,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(102, 126, 234, 0.5)',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#667eea',
    },
}));
// .>'==========================





// for the create account 
const StyledButton = styled(Button)(() => ({
    borderRadius: 12,
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    textTransform: 'none',
    background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
    boxShadow: '0 3px 15px rgba(102, 126, 234, 0.3)',
    '&:hover': {
        background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
        boxShadow: '0 5px 20px rgba(102, 126, 234, 0.4)',
    },
}));

// for the social buttons
const SocialButton = styled(Button)(() => ({
    borderRadius: 12,
    padding: '10px 20px',
    textTransform: 'none',
    fontWeight: 500,
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    backdropFilter: 'blur(10px)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
}));

export const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        else if (formData.firstName.length < 2) newErrors.firstName = 'Minimum 2 characters';

        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        else if (formData.lastName.length < 2) newErrors.lastName = 'Minimum 2 characters';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email';

        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, '')))
            newErrors.phone = 'Invalid phone number';

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password))
            newErrors.password = 'Use uppercase, lowercase & number';

        if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSuccess(true);
        } catch (error) {
            console.error('Signup error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSocialSignup = (provider) => {
        console.log(`Signup with ${provider}`);
    };

    if (success) {
        return (
            <Container component="main" maxWidth="sm">
                <StyledPaper>
                    <Typography component="h1" variant="h4" sx={{ color: '#fff', mb: 2 }}>
                        Welcome!
                    </Typography>
                    <Alert severity="success" sx={{ width: '100%', mb: 2 }}>
                        Account created successfully!
                    </Alert>
                    <StyledButton
                        fullWidth
                        variant="contained"
                        onClick={() => setSuccess(false)}
                        sx={{ mt: 2 }}
                    >
                        Back to Signup
                    </StyledButton>
                </StyledPaper>
            </Container>
        );
    }

    return (
        <Container
            component="main"
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}
        >
            <StyledPaper>
                <Typography component="h1" variant="h4" sx={{ color: '#fff', mb: 1 }}>
                    Create Account
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4 }}>
                    Join us and start your journey today
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    {/* .>' the name field =======================*/}
                    <Grid container spacing={2} sx={{ maxWidth: '500px', width: '100%', mx: '3', justifyContent: 'center' }} >
                        {[
                            { name: 'firstName', label: 'First Name', icon: <Person /> },
                            { name: 'lastName', label: 'Last Name', icon: <Person /> }
                        ].map(({ name, label, icon }) => (


                            // for the name field
                            <Grid item xs={12} key={name}>
                                <StyledTextField
                                    fullWidth
                                    label={label}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    error={!!errors[name]}
                                    helperText={errors[name]}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">{icon}</InputAdornment>
                                    }}
                                />

                                {/* <StyledTextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    fullWidth
                                    label={label}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    error={!!errors[name]}
                                    helperText={errors[name]}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"></InputAdornment>
                                    }}
                                /> */}


                            </Grid>
                            // for the name field




                        ))}

                        {/* for the email field */}
                        <Grid item xs={12}>
                            <StyledTextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Email /></InputAdornment>
                                }}
                            />
                        </Grid>
                        {/* for the email field */}




                        {/* for the phone field */}
                        <Grid item xs={12}>
                            <StyledTextField
                                fullWidth
                                label="Phone Number (Optional)"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!errors.phone}
                                helperText={errors.phone}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Phone /></InputAdornment>
                                }}
                            />
                        </Grid>
                        {/* for the phone field */}



                        {/* mapping of the password and confirm password */}
                        {[
                            { name: 'password', label: 'Password', show: showPassword, setShow: setShowPassword },
                            { name: 'confirmPassword', label: 'Confirm Password', show: showConfirmPassword, setShow: setShowConfirmPassword }
                        ].map(({ name, label, show, setShow }) => (
                            <Grid item xs={12} key={name}>
                                <StyledTextField
                                    fullWidth
                                    label={label}
                                    name={name}
                                    type={show ? 'text' : 'password'}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    error={!!errors[name]}
                                    helperText={errors[name]}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShow(!show)} edge="end">
                                                    {show ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    {/* .>' the name field ======================= over*/}








                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Create Account'}
                    </StyledButton>

                    <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>OR</Typography>
                    </Divider>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        {[
                            { name: 'Google', icon: <Google /> },
                            { name: 'Facebook', icon: <Facebook /> },
                            { name: 'Twitter', icon: <Twitter /> }
                        ].map(({ name, icon }) => (
                            <Grid item xs={12} sm={4} key={name}>
                                <SocialButton
                                    fullWidth
                                    variant="outlined"
                                    startIcon={icon}
                                    onClick={() => handleSocialSignup(name)}
                                >
                                    {name}
                                </SocialButton>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                            Already have an account?{' '}
                            <Link href="#" sx={{ color: '#fff', fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                Sign in
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </StyledPaper>
        </Container>
    );
};

export default Signup;
