import { Box, Center, Heading, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { BarChart, LineChart } from "react-native-chart-kit";

export default function MetricsPage() {
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
    backgroundColor: "#8B8BD8",
    backgroundGradientFrom: "#6d6dce",
    backgroundGradientTo: "#9d9dde",
    decimalPlaces: "1",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <Center h="100%" w="100%">
      <Box safeArea p="2" h="100%" w="90%" maxW="320">
        <Center marginBottom="30px" marginTop="20px">
          <Heading
            mt="0"
            size="xl"
            color="coolGray.800"
            _dark={{ color: "warmGray.50" }}
            fontWeight="semibold"
          >
            Metrics
          </Heading>
        </Center>
        <View>
          <Text fontWeight="semibold">Daily Water Usage Distribution</Text>
          <Text>
            Total water used:{" "}
            <Text fontWeight="semibold" color="#6a6acd">
              114L
            </Text>
          </Text>
          <BarChart
            data={bardata}
            width={300}
            height={220}
            yAxisSuffix={"L"}
            chartConfig={chartConfig}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        <View>
          <Text marginTop="30px" fontWeight="semibold">
            Weekly Overview
          </Text>
          <Text>
            Day with lowest water usage:{" "}
            <Text fontWeight="semibold" color="#6a6acd">
              Tue
            </Text>
          </Text>
          <LineChart
            data={linedata}
            width={300}
            height={220}
            yAxisSuffix={"L"}
            chartConfig={chartConfig}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </Box>
    </Center>
  );
}
