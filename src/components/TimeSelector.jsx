import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";

function StyledSelector(props) {
    const { sx, ...other } = props;
    const isHighlight = props.isHighlight;

    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    isHighlight ? theme.palette.background.alt : "transparent",
                m: 1,
                p: 0.5,
                display: "flex",
                justifyContent: "center",
                borderRadius: 25,
                width: "80px",
                fontSize: "14px",
                fontWeight: "bold",
                ...sx,
            }}
            {...other}
        />
    );
}

const TimeSelector = () => {
    const [isWeek, setIsWeek] = useState(true);
    const [isMonth, setIsMonth] = useState(false);
    const [isCustom, setIsCustom] = useState(false);
    return (
        <Box
            sx={{
                height: "50px",
                backgroundColor: "#3D6F93",
                p: 0.25,
                display: "flex",
                justifyContent: "flex-start",
                borderRadius: 25,
            }}
        >
            <IconButton
                onClick={() => {
                    setIsWeek(true);
                    setIsMonth(false);
                    setIsCustom(false);
                }}
            >
                <StyledSelector isHighlight={isWeek}>Week</StyledSelector>
            </IconButton>
            <IconButton
                onClick={() => {
                    setIsWeek(false);
                    setIsMonth(true);
                    setIsCustom(false);
                }}
            >
                <StyledSelector isHighlight={isMonth}>Month</StyledSelector>
            </IconButton>
            <IconButton
                onClick={() => {
                    setIsWeek(false);
                    setIsMonth(false);
                    setIsCustom(true);
                }}
            >
                <StyledSelector isHighlight={isCustom}>Custom</StyledSelector>
            </IconButton>
        </Box>
    );
};

export default TimeSelector;
