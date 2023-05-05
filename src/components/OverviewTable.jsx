import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    styled,
    tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.primary[600]
                : theme.palette.grey[300],
        color: theme.palette.secondary[100],
        fontSize: 16,
        fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
        backgroundColor:
            theme.palette.mode === "dark"
                ? theme.palette.primary[400]
                : theme.palette.grey[100],
        color: theme.palette.secondary[100],
        borderColor: theme.palette.primary[400],
        fontSize: 14,
    },
}));

function createData(deviceName, energyConsumption, estCost) {
    return { deviceName, energyConsumption, estCost };
}

const rows = [
    createData("Power Distribution 1", 4323, 6246735),
    createData("Power Distribution 2", 5959, 8610755),
    createData("Power Distribution 3", 7088, 10239270),
    createData("Power Distribution 4", 7088, 10239270),
    createData("Power Distribution 5", 7088, 10239270),
    createData("Power Distribution 6", 7088, 10239270),
    createData("Other", 173, 249985),
    createData("Main Kwh Meter", 17541, 25346745),
];

const OverviewTable = () => {
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 300 }}>
                <Table
                    sx={{ minWidth: 600 }}
                    stickyHeader
                    aria-label="overview table"
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">
                                Device Name
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                Energy Consumption
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                Cost Estimation
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.deviceName}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <StyledTableCell align="left">
                                    {row.deviceName}
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    {row.energyConsumption} kWh
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    Rp {row.estCost}
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default OverviewTable;
