import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { mockDataStackedBar as data } from "data/mockData";
import { useTheme } from "@mui/material";
import { StackedBarColorGen } from "theme";

const StackedBarOverview = () => {
    const theme = useTheme();
    const stackedBarColors = StackedBarColorGen(2);
    return (
        <ResponsiveBar
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
            keys={["burger", "sandwich", "donut"]}
            indexBy="country"
            margin={{ top: 50, right: 100, bottom: 100, left: 100 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            // colors={{ scheme: "red_yellow_green" }}
            // colors={stackedBarColors}
            // colors={["#FF7777", "#FFFF77", "#77FF77"]}
            colors={({ id, data }) => data[`${id}Color`]}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: 32,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "food",
                legendPosition: "middle",
                legendOffset: -40,
                tickValues: 5,
            }}
            enableLabel={false}
            enableGridY={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            legends={[
                {
                    dataFrom: "keys",
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 80,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: "left-to-right",
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={(e) =>
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            }
        />
    );
};

export default StackedBarOverview;
