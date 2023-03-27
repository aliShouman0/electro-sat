import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveCalendar } from "@nivo/calendar";
import { calendarData, data, data2, expenses } from "./mockData";
import CustomResponsiveBar from "../../components/CustomResponsiveBar/CustomResponsiveBar";
import InfoBox from "../../components/InfoBox/InfoBox";

function Dashboard() {
  return (
    <>
      <main className="fixed  w-[80%] h-5/6 overflow-auto  top-28  right-44 flex flex-wrap ">
        <div className="w-full h-1/3">
          <ResponsiveCalendar
            data={calendarData}
            from="2016-01-01"
            to="2016-07-12"
            emptyColor="#eeeeee"
            colors={["#BFD4D4", "#88D1D0", "#40C1BF", "#04FFFA"]}
            margin={{ top: 0, right: 40, bottom: 0, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 0,
                translateX: -80,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 16,
                itemsSpacing: 4,
                itemDirection: "right-to-left",
              },
            ]}
          />
        </div>
        <div className="w-full h-1/3 flex flex-wrap items-center justify-center">
          <InfoBox
            title={"الصندوق"}
            oldTotalUSD={14}
            todayTotalUDS={16}
            oldTotalLira={566000}
            todayTotalLira={245000}
            data={false}
          />
          {/* <InfoBox title={"مبيعات اليوم"} data={[145000, 84]} /> */}
        </div>
        <div className="h-1/2 w-1/2 mt-10">
          <CustomResponsiveBar
            data={data}
            keys={["رسيفر", "دايزك", "شريط", "Mtc", "Alfa"]}
            indexBy={"items"}
            axisBottomLegend={""}
            axisLeftLegend={"count"}
          />
        </div>
        <div className="h-1/2 w-1/2 mt-10">
          <CustomResponsiveBar
            data={expenses}
            keys={["علي", "باقر", "مهدي", "بيت", "احمد"]}
            indexBy={"name"}
            axisBottomLegend={""}
            axisLeftLegend={"L . L"}
          />
        </div>
        <div className="h-1/2 w-1/2 mt-10">
          <ResponsivePie
            data={data2}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 10,
                itemWidth: 50,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
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
        </div>
      </main>
    </>
  );
}

export default Dashboard;
