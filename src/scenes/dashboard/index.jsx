import { DownloadOutlined } from "@mui/icons-material";
import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import StackedBarOverview from "components/StackedBarOverview";
import React from "react";

const Dashboard = () => {
    const theme = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width:1200px");

    return (
        <Box m="1.5rem 2.5rem">
            <FlexBetween>
                <Header
                    title="Analytics Overview"
                    subtitle="Overview of all device data"
                />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.alt,
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlined sx={{ mr: "10px" }} />
                        Download Report
                    </Button>
                </Box>
            </FlexBetween>
            {/* Grid */}
            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(6,1fr)"
                gridAutoRows="160px"
                gap="20px"
                sx={{
                    "& > div": {
                        gridColumn: isNonMediumScreens ? undefined : "span 6",
                    },
                }}
            >
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                >
                    <StackedBarOverview />
                </Box>
                <Box
                    gridColumn="span 2"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                >
                    <Typography>Cost Estimation Pie Chart</Typography>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                >
                    <Typography>Cost Estimation</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
