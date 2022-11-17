import { Box, Center, Heading, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";
import Header from "../components/Header";
import styles from "../styles/global";

export default function MetricsPage({ navigation }) {
  const linedata = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [38, 26, 50, 72, 40, 55, 60],
        strokeWidth: 4,
      },
    ],
  };

  const bardata = {
    labels: ["12-6am", "6-12pm", "12-6pm", "6-12am"],
    datasets: [
      {
        data: [12, 32, 48, 22],
      },
    ],
  };

  const chartConfig = {
    // backgroundColor: "#8B8BD8",
    backgroundGradientFrom: "#6d6dce",
    backgroundGradientTo: "#9d9dde",
    decimalPlaces: "1",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" py="20" px="4" >
      <Header heading={"Metrics"} />
      <Box safeArea h="100%" w="100%" px="4" >
          <Text fontSize="xl" fontWeight="semibold">Daily Water Usage Distribution</Text>
          <Text fontSize="lg">
            Total water used:{" "}
            <Text bold fontSize="lg" color="#6a6acd">
              114L
            </Text>
          </Text>
          <Center>
          <BarChart
            data={bardata}
            width={360}
            height={200}
            yAxisSuffix={"L"}
            chartConfig={chartConfig}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          </Center>

          <Text mt="8" fontSize="xl" fontWeight="semibold">
            Weekly Overview
          </Text>
          <Text fontSize="lg">
            Day with lowest water usage:{" "}
            <Text bold fontSize="lg" color="#6a6acd">
              Tue
            </Text>
          </Text>
          <Center>
          <LineChart
            data={linedata}
            width={360}
            height={200}
            yAxisSuffix={"L"}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          </Center>
      </Box>
    </Box>
  );
}
