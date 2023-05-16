import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { voltageData as oriData } from "./data";
import { useTheme } from "@mui/material";

const data = [].concat(oriData).reverse();

const HistVoltage = () => {
    const theme = useTheme();

    return (
        <ResponsiveLine
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.secondary[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: theme.palette.secondary[200],
                            fontSize: "14px",
                            fontWeight: "bold",
                        },
                    },
                    ticks: {
                        line: {
                            stroke: theme.palette.secondary[200],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.palette.secondary[200],
                            fontSize: "12px",
                        },
                    },
                },
                legends: {
                    text: {
                        fill: theme.palette.secondary[200],
                        fontSize: "14px",
                    },
                },
                tooltip: {
                    container: {
                        color: theme.palette.primary.main,
                    },
                },
            }}
            margin={{ top: 20, right: 110, bottom: 110, left: 70 }}
            xScale={{
                format: "%Y-%m-%d %H:%M:%S",
                precision: "minute",
                type: "time",
                useUTC: false,
            }}
            yScale={{
                type: "linear",
                min: 0,
                max: "250",
                stacked: false,
                reverse: false,
            }}
            xFormat="time:%Y-%m-%d %H:%M:%S"
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -35,
                legend: "Timestamp",
                legendOffset: 50,
                legendPosition: "middle",
                format: "%H:%M",
                tickValues: "every 10 minutes",
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                tickValues: 5,
                legend: "Voltage rms (V)",
                legendOffset: -50,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            // colors={{ scheme: "red_yellow_green" }}
            colors={(dat) => dat.color}
            enablePoints={true}
            pointSize={3}
            pointColor={{ from: "color", modifiers: [] }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "color", modifiers: [] }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.05}
            enableSlices="x"
            useMesh={false}
            enableCrosshair={false}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default HistVoltage;
