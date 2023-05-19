import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    styled,
    tableCellClasses,
    useTheme,
} from "@mui/material";
import React, { useEffect, useRef } from "react";
import { SummaryData } from "./data";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.primary[600]
                : theme.palette.grey[300],
        color: theme.palette.secondary[100],
        fontSize: 14,
        fontWeight: "bold",
        padding: "5px 0 5px 10px",
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.primary[400]
                : theme.palette.grey[100],
        color: theme.palette.secondary[100],
        borderColor: theme.palette.primary[400],
        fontSize: 12,
        padding: "5px 0 5px 10px",
    },
}));

const SummaryTable = ({ data, theme }) => {
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxWidth: 150 }}>
                <Table sx={{ minWidth: 125 }} stickyHeader aria-label="summary">
                    {Object.keys(data).map((key) => {
                        return key === "id" ? (
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left" colSpan={2}>
                                        {data.id}
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                        ) : (
                            <TableBody>
                                <TableRow
                                    key={key}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <StyledTableCell
                                        align="left"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {key}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {data[key]}
                                    </StyledTableCell>
                                </TableRow>
                            </TableBody>
                        );
                    })}
                </Table>
            </TableContainer>
        </Paper>
    );
};

const Summary = () => {
    const theme = useTheme();
    const canvas = useRef();
    let ctx = null;

    useEffect(() => {
        const canvasEle = canvas.current;
        canvasEle.width = 220;
        canvasEle.height = 130;

        // get context of the canvas
        ctx = canvasEle.getContext("2d");
        let CenterY = 110;
        let CenterX = 100;
        let circleRad = 80;
        let LineLen = 90;
        let BaseColor = theme.palette.mode === "dark" ? "#AAFFFF" : "#3333FF";
        let ArrowColor = theme.palette.mode === "dark" ? "#FFAAAA" : "#FF3333";
        let StrokeWidth = 3;
        let arrowDeg = 30;
        drawLine(
            {
                p1: { x: CenterX, y: CenterY },
                p2: { x: CenterX, y: CenterY - LineLen },
            },
            { color: BaseColor, width: StrokeWidth }
        );
        drawLine(
            {
                p1: { x: CenterX - LineLen, y: CenterY },
                p2: { x: CenterX + LineLen, y: CenterY },
            },
            { color: BaseColor, width: StrokeWidth }
        );
        drawCircle(
            { x: CenterX, y: CenterY, r: circleRad, angle: 180 },
            { color: BaseColor, width: StrokeWidth }
        );
        drawLineArrowhead(
            {
                p1: { x: CenterX, y: CenterY },
                p2: {
                    x:
                        CenterX +
                        circleRad * Math.cos((arrowDeg / 180) * Math.PI),
                    y:
                        CenterY -
                        circleRad * Math.sin((arrowDeg / 180) * Math.PI),
                },
                startSize: 0,
                endSize: 10,
            },
            { color: ArrowColor, width: StrokeWidth }
        );

        writeText(
            { text: "W", x: CenterX + LineLen + 15, y: CenterY - 8 },
            {
                fontSize: 14,
                color: theme.palette.secondary[100],
                textAlign: "center",
                fontWeight: "bold",
            }
        );
        writeText(
            { text: "VAR", x: CenterX, y: 0 },
            {
                fontSize: 14,
                color: theme.palette.secondary[100],
                textAlign: "center",
                fontWeight: "bold",
            }
        );
    });

    // draw a line
    const drawLine = (info, style = {}) => {
        const { p1, p2 } = info;
        const { color = "black", width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    };

    const drawCircle = (info, style = {}) => {
        const { x, y, r, angle } = info;
        const endRad = ((360 - angle) / 180) * Math.PI;
        const { color = "black", width = 1, fill = "transparent" } = style;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, endRad, true);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.stroke();
    };

    function drawLineArrowhead(info, style = {}) {
        const { p1, p2, startSize, endSize } = info;
        const { color = "black", width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        if (startSize > 0) {
            let lineAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            let delta = Math.PI / 6;
            for (let i = 0; i < 2; i++) {
                ctx.moveTo(p1.x, p1.y);
                let x = p1.x + startSize * Math.cos(lineAngle + delta);
                let y = p1.y + startSize * Math.sin(lineAngle + delta);
                ctx.lineTo(x, y);
                delta *= -1;
            }
        }
        if (endSize > 0) {
            let lineAngle = Math.atan2(p1.y - p2.y, p1.x - p2.x);
            let delta = Math.PI / 6;
            for (let i = 0; i < 2; i++) {
                ctx.moveTo(p2.x, p2.y);
                let x = p2.x + endSize * Math.cos(lineAngle + delta);
                let y = p2.y + endSize * Math.sin(lineAngle + delta);
                ctx.lineTo(x, y);
                delta *= -1;
            }
        }
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    const writeText = (info, style = {}) => {
        const { text, x, y } = info;
        const {
            fontSize = 20,
            fontFamily = "Arial",
            color = "black",
            textAlign = "left",
            textBaseline = "top",
            fontWeight = "",
        } = style;

        ctx.beginPath();
        ctx.font = fontWeight + " " + fontSize + "px " + fontFamily;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.stroke();
    };

    return (
        <Box
            sx={{
                margin: "10px",
                overflow: "auto",
                height: 190,
            }}
            display="flex"
            alignItems="start"
            justifyContent="flex-start"
        >
            <canvas ref={canvas}></canvas>
            {SummaryData.map((dat) => {
                return (
                    <Box
                        sx={{
                            margin: "10px",
                            backgroundColor: "#FFAAAA",
                        }}
                    >
                        <SummaryTable data={dat} theme={theme} />
                    </Box>
                );
            })}
        </Box>
    );
};

export default Summary;
