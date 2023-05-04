import React from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    HomeOutlined,
    DevicesOutlined,
    ChevronRightOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpeg";

const navItems = [
    // { text: "Overview", icon: null },
    // { text: "Device List", icon: null },
    // { text: "Management", icon: null },
    { text: "Dashboard", urlPath: "home", icon: <HomeOutlined /> },
    { text: "Device List", urlPath: "devicelist", icon: <DevicesOutlined /> },
    { text: "Settings", urlPath: "settings", icon: <SettingsOutlined /> },
];

const Sidebar = ({
    drawerWidth,
    isNonMobile,
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();
    const themePrimary = theme.palette.primary;
    const themeSecondary = theme.palette.secondary;
    const themeBackground = theme.palette.background;

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: themeSecondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={themeSecondary.main}>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="0.5rem"
                                >
                                    <Typography variant="h4" fontWeight="bold">
                                        ECOMVISION
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton
                                        onClick={() =>
                                            setIsSidebarOpen(!isSidebarOpen)
                                        }
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon, urlPath }) => {
                                if (!icon) {
                                    return (
                                        <Typography
                                            key={text}
                                            sx={{ m: "2.25rem 0 1rem 3rem" }}
                                        >
                                            {text}
                                        </Typography>
                                    );
                                }
                                const lcText = text.toLowerCase();
                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${urlPath}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lcText
                                                        ? themeSecondary[500]
                                                        : "transparent",
                                                color:
                                                    active === lcText
                                                        ? themePrimary[600]
                                                        : themeSecondary[100],
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.target.style.backgroundColor =
                                                    active === lcText
                                                        ? themeSecondary[400]
                                                        : themeBackground.hover)
                                            }
                                            onMouseLeave={(e) =>
                                                (e.target.style.backgroundColor =
                                                    active === lcText
                                                        ? themeSecondary[500]
                                                        : "transparent")
                                            }
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color:
                                                        active === lcText
                                                            ? themePrimary[600]
                                                            : themePrimary[200],
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined
                                                    sx={{ ml: "auto" }}
                                                />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
