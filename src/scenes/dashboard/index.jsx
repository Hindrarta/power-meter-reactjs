import React from "react";
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
import OverviewTable from "components/OverviewTable";
import OverviewStackedBar from "components/OverviewStackedBar";
import OverviewCircularGrid from "components/OverviewCircularGrid";
import TimeSelector from "components/TimeSelector";

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
                            backgroundColor: theme.palette.secondary[400],
                            color: theme.palette.primary[600],
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
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        p="0.1rem"
                    >
                        <Typography variant="h4" fontWeight="bold">
                            Daily Power Consumption
                        </Typography>
                        <TimeSelector />
                    </Box>
                    <Box p="1rem" height="240px">
                        <OverviewStackedBar />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 2"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                    alignItems="center"
                >
                    <Typography variant="h4" fontWeight="bold" align="center">
                        Power Consumption Chart
                    </Typography>
                    <OverviewCircularGrid />
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem"
                    borderRadius="0.55rem"
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        align="center"
                        marginBottom="1rem"
                    >
                        Power Consumption Details
                    </Typography>
                    <OverviewTable />
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
