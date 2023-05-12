import { ChargingStationOutlined } from "@mui/icons-material";
import {
    Box,
    ButtonBase,
    Card,
    CardContent,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Header from "components/Header";
import React from "react";

const deviceData = [
    {
        _id: "a1",
        status: "Online",
        deviceName: "Main kWh Meter",
        data: { Vavrg: 221.63, Iavrg: 2.5, Ptot: 1.6622, Edel: 49.866 },
    },
    {
        _id: "b1",
        status: "Online",
        deviceName: "Power Distribution 1",
        data: { Vavrg: 228.37, Iavrg: 1.33, Ptot: 0.9111, Edel: 27.333 },
    },
    {
        _id: "b2",
        status: "Online",
        deviceName: "Power Distribution 2",
        data: { Vavrg: 227.77, Iavrg: 2.21, Ptot: 1.5101, Edel: 45.303 },
    },
    {
        _id: "b3",
        status: "Offline",
        deviceName: "Power Distribution 3",
        data: { Vavrg: 226.01, Iavrg: 3.97, Ptot: 2.6917, Edel: 80.751 },
    },
    {
        _id: "b4",
        status: "Online",
        deviceName: "Power Distribution 4",
        data: { Vavrg: 228.73, Iavrg: 1.36, Ptot: 0.9332, Edel: 27.996 },
    },
    {
        _id: "b5",
        status: "Offline",
        deviceName: "Power Distribution 5",
        data: { Vavrg: 225.1, Iavrg: 2.87, Ptot: 1.9381, Edel: 58.143 },
    },
    {
        _id: "b6",
        status: "Online",
        deviceName: "Power Distribution 6",
        data: { Vavrg: 221.14, Iavrg: 1.92, Ptot: 1.2737, Edel: 38.211 },
    },
];

const SummaryData = ({ Vavrg, Iavrg, Ptot, Edel }) => {
    const ItemName = ({ name }) => {
        return (
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ ml: "60px", mr: "5px", width: "60px" }}
            >
                {name}
            </Typography>
        );
    };
    const ItemValue = ({ value }) => {
        return (
            <Typography
                align="right"
                fontWeight="bold"
                sx={{ ml: "5px", mr: "5px", width: "80px" }}
                variant="h5"
            >
                {value}
            </Typography>
        );
    };
    const ItemUnit = ({ unit }) => {
        return (
            <Typography variant="h5" fontWeight="bold" sx={{ ml: "10px" }}>
                {unit}
            </Typography>
        );
    };
    return (
        <Box
            mt={1.5}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
        >
            <Box
                display="inline-flex"
                justifyContent="flex-start"
                sx={{ mb: "5px" }}
            >
                <ItemName name="V avrg" />
                <ItemValue value={Vavrg} />
                <ItemUnit unit="V" />
            </Box>
            <Box
                display="inline-flex"
                justifyContent="flex-start"
                sx={{ mb: "5px" }}
            >
                <ItemName name="I avrg" />
                <ItemValue value={Iavrg} />
                <ItemUnit unit="A" />
            </Box>
            <Box
                display="inline-flex"
                justifyContent="flex-start"
                sx={{ mb: "5px" }}
            >
                <ItemName name="P tot" />
                <ItemValue value={Ptot} />
                <ItemUnit unit="kW" />
            </Box>
            <Box
                display="inline-flex"
                justifyContent="flex-start"
                sx={{ mb: "5px" }}
            >
                <ItemName name="E del" />
                <ItemValue value={Edel} />
                <ItemUnit unit="kWh" />
            </Box>
        </Box>
    );
};

const Device = ({ _id, deviceName, status, data }) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                border: 2,
                borderRadius: "0.2rem",
                borderColor: theme.palette.primary[300],
                width: "100%",
                height: "100%",
            }}
        >
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" justifyContent="flex-start" mb={2}>
                        <ChargingStationOutlined fontSize="large" />
                        <Typography
                            fontSize="16px"
                            fontWeight="bold"
                            color={theme.palette.secondary[300]}
                            ml="2rem"
                        >
                            {deviceName}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            color={
                                status.toLowerCase() === "online"
                                    ? "#33dd33"
                                    : "#ff7777"
                            }
                            fontSize="16px"
                            fontWeight="bold"
                            fontStyle="italic"
                        >
                            {status}
                        </Typography>
                    </Box>
                </Box>
                <Divider
                    variant="fullWidth"
                    sx={{ border: 2, color: theme.palette.primary[300] }}
                />
                <SummaryData
                    Vavrg={data.Vavrg}
                    Iavrg={data.Iavrg}
                    Ptot={data.Ptot}
                    Edel={data.Edel}
                />
            </CardContent>
        </Card>
    );
};

const DeviceList = () => {
    const isNonMobile = useMediaQuery("(min-width:1300px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header
                title="LIST DEVICES"
                subtitle="List of Power Meter Devices"
            />
            <Box
                mt="20px"
                display="grid"
                gridTemplateColumns="repeat(3,minmax(0,1fr))"
                justifyContent="space-between"
                rowGap="20px"
                columnGap="1%"
                sx={{
                    "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 3",
                    },
                }}
            >
                {deviceData.map(({ _id, deviceName, status, data }) => (
                    <ButtonBase onClick={() => console.log(_id)}>
                        <Device
                            key={_id}
                            _id={_id}
                            deviceName={deviceName}
                            status={status}
                            data={data}
                        />
                    </ButtonBase>
                ))}
            </Box>
        </Box>
    );
};

export default DeviceList;
