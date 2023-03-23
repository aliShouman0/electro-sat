import { ResponsiveBar } from "@nivo/bar";
import React from "react";

function CustomResponsiveBar({
  data,
  keys,
  colors,
  indexBy,
  axisBottomLegend,
  axisLeftLegend,
}) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={
        colors
          ? colors
          : ["#BFD4D4", "#88D1D0", "#40C1BF", "#04FFFA", "#444444", "#142D2C"]
      }
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: axisBottomLegend,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: axisLeftLegend,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
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
                itemOpacity: 0.51,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default CustomResponsiveBar;
