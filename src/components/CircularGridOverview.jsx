import { ResponsiveRadialBar } from "@nivo/radial-bar";
import React from "react";
import { mockDataCircularGrid as data } from "data/mockData";
import { useTheme } from "@mui/material";

const CircularGridOverview = () => {
    const theme = useTheme();
    return (
        <ResponsiveRadialBar
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.secondary[200],
                        },
                    },
                    legend: {
                        text: {
                            fill: theme.palette.secondary[200],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: theme.palette.secondary[200],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.palette.secondary[200],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: theme.palette.secondary[200],
                    },
                },
                tooltip: {
                    container: {
                        color: theme.palette.primary.main,
                    },
                },
            }}
            valueFormat=" >-.2f"
            endAngle={360}
            innerRadius={0.15}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            // colors={{ scheme: "red_yellow_green" }}
            colors={(dat) => dat.data.color}
            borderColor={{
                from: "color",
                modifiers: [["darker", "0"]],
            }}
            enableRadialGrid={false}
            enableCircularGrid={false}
            radialAxisStart={null}
            circularAxisOuter={null}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 40,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 90,
                    itemHeight: 10,
                    itemTextColor: "#999",
                    symbolSize: 18,
                    symbolShape: "square",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000",
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default CircularGridOverview;
