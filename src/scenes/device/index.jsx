import {
    Box,
    Typography,
    styled,
    useMediaQuery,
    useTheme,
} from "@mui/material";
// import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import React from "react";
// import { useParams } from "react-router-dom";
import HistVoltage from "./HistVoltage";
import Summary from "./Summary";
import HistCurrent from "./HistCurrent";
import HistPower from "./HistPower";
import HistEnergy from "./HistEnergy";
import Alarm from "./Alarm";

const GridBox = styled(Box)(({ gridColumn, gridRow, theme }) => ({
    gridColumn: `span ${gridColumn}`,
    gridRow: `span ${gridRow}`,
    backgroundColor: theme.palette.background.alt,
    p: "1rem",
    borderRadius: "0.55rem",
}));

const DeviceDetails = () => {
    // const { id } = useParams();
    const isNonMediumScreens = useMediaQuery("(min-width:1200px");
    const theme = useTheme();

    return (
        <Box m="1.5rem 2.5rem">
            <Header
                title="Analytics Overview"
                subtitle="Overview of all device data"
            />
            {/* Grid */}
            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(5,1fr)"
                gridAutoRows="250px"
                gap="25px"
                sx={{
                    "& > div": {
                        gridColumn: isNonMediumScreens ? undefined : "span 5",
                    },
                }}
            >
                <GridBox gridColumn={3} gridRow={1} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    >
                        Voltage History (V) (rms)
                    </Typography>
                    <HistVoltage />
                </GridBox>
                <GridBox gridColumn={2} gridRow={1} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    ></Typography>
                    <Summary />
                </GridBox>
                <GridBox gridColumn={3} gridRow={1} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    >
                        Current History (A) (rms)
                    </Typography>
                    <HistCurrent />
                </GridBox>
                <GridBox gridColumn={2} gridRow={2} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    >
                        Image Captured
                    </Typography>
                </GridBox>
                <GridBox gridColumn={3} gridRow={1} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    >
                        Power Consumption History (kW)
                    </Typography>
                    <HistPower />
                </GridBox>
                <GridBox gridColumn={3} gridRow={1} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    >
                        Energy Consumption (Wh)
                    </Typography>
                    <HistEnergy />
                </GridBox>
                <GridBox gridColumn={2} gridRow={1} theme={theme}>
                    <Typography
                        variant="h5"
                        color={theme.palette.secondary[200]}
                        fontWeight="bold"
                        sx={{ margin: "1rem 0 0 1rem" }}
                    >
                        Alarm History
                    </Typography>
                    <Alarm />
                </GridBox>
            </Box>
        </Box>
    );
};

export default DeviceDetails;
