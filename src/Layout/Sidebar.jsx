import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { useNavigate } from 'react-router-dom';

const drawerWidthCollapsed = 60;
const drawerWidthExpanded = 200;

const sidebarItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Reports', icon: <BarChartIcon />, path: '/reports' },
    { label: 'Integrations', icon: <LayersIcon />, path: '/integrations' },
];

export const Sidebar = () => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            PaperProps={{
                sx: {
                    width: expanded ? drawerWidthExpanded : drawerWidthCollapsed,
                    overflowX: 'hidden',
                    transition: 'width 0.3s ease-in-out',
                    top: '48px', // match your fixed navbar height
                    height: 'calc(100% - 48px)',
                    bgcolor: 'background.paper',
                    borderRight: '1px solid #ddd',
                },
            }}
        >
            <List>
                {sidebarItems.map(({ label, icon, path }) => (
                    <ListItem
                        button
                        key={label}
                        onClick={() => navigate(path)}
                        sx={{ paddingY: 1.5, paddingX: 2 }}
                    >
                        <Tooltip title={!expanded ? label : ''} placement="right">
                            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
                                {icon}
                            </ListItemIcon>
                        </Tooltip>
                        {expanded && <ListItemText primary={label} sx={{ marginLeft: 2 }} />}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
