import React from "react";
import { EnergyData as data } from "./data";
import { Typography, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

// const data = [].concat(oriData).reverse();
const stackedBarColors = ["#E33009", "#E2871E", "#EEEE19"];
const labels = [
    { key: "a", value: "E1 / R" },
    { key: "b", value: "E2 / S" },
    { key: "c", value: "E3 / T" },
];
const HistEnergy = () => {
    const theme = useTheme();

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
                        fontSize: "12px",
                    },
                },
                tooltip: {
                    container: {
                        color: theme.palette.primary.main,
                    },
                },
            }}
            keys={["E1 / R", "E2 / S", "E3 / T"]}
            tooltip={(d) => {
                return (
                    <ul
                        style={{
                            listStyleType: "none",
                            padding: 3,
                            backgroundColor: "#FFFFFF",
                        }}
                    >
                        {labels.map((item, index) => (
                            <li key={"lg" + index}>
                                <div className="timestamp">
                                    <div
                                        className="energydata"
                                        style={{
                                            background: stackedBarColors[index],
                                        }}
                                    />
                                    <Typography
                                        fontSize="12px"
                                        color="#000000"
                                        fontWeight="bold"
                                        margin="5px 10px 5px 10px"
                                    >
                                        {labels[index].value +
                                            ": " +
                                            d.data[labels[index].value] +
                                            stackedBarColors[index]}{" "}
                                    </Typography>
                                </div>
                            </li>
                        ))}
                    </ul>
                );
            }}
            indexBy="timestamp"
            margin={{ top: 20, right: 110, bottom: 110, left: 70 }}
            padding={0.1}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            // colors={{ scheme: "red_yellow_green" }}
            colors={stackedBarColors}
            borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
            }}
            maxValue={150}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -35,
                legend: "Timestamp",
                legendPosition: "middle",
                legendOffset: 40,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Energy (Wh)",
                legendPosition: "middle",
                legendOffset: -50,
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
            enableSlices="x"
            legends={[
                {
                    dataFrom: "keys",
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

export default HistEnergy;
