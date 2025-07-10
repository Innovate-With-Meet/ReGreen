import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    IconButton,
    Container,
    Divider,
    MenuItem,
    Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backdropFilter: 'blur(20px)',
    borderRadius: theme.shape.borderRadius + 6,
    border: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
    background: 'linear-gradient(to right, #2196f3, #21cbf3)',
    boxShadow: theme.shadows[4],
    padding: '4px 8px', // 🔧 Reduced vertical and horizontal padding
    minHeight: '48px !important', // 🔧 Optional: reduce height if needed
}));

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/Login');
    };

    const menuItems = [
        { label: 'Section1', path: '/*' },
        { label: 'Section2', path: '/*' },
        { label: 'Section3', path: '/*' },
        { label: 'Section4', path: '/*' },
        { label: 'Section5', path: '/*' },

    ];

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                backgroundImage: 'none',
                bgcolor: 'transparent',
                boxShadow: 0,
                // mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            {/* <Container maxWidth="lg"> */}
            <Box sx={{ width: '100%' }}>

                <StyledToolbar variant="dense">
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    variant="text"
                                    color="inherit"
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        color: 'white',
                                        fontWeight: 500,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            transform: 'scale(1.05)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={handleLogout}
                            sx={{
                                textTransform: 'none',
                                fontWeight: 'bold',
                            }}
                        >
                            Logout
                        </Button>
                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton onClick={toggleDrawer(true)} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                    backgroundColor: 'background.default',
                                    p: 2,
                                },
                            }}
                        >
                            <Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>

                                {menuItems.map((item) => (
                                    <MenuItem
                                        key={item.label}
                                        onClick={() => {
                                            navigate(item.path);
                                            setOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </MenuItem>
                                ))}

                                <Divider sx={{ my: 2 }} />
                                <MenuItem>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        fullWidth
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
                {/* </Container> */}
            </Box>
        </AppBar>
    );
};

export default Navbar;