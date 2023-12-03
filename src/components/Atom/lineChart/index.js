import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

const LineChart = ({ data }) => {
  const imsiData = [
    {
      labels: [9, 10, 11, 12],
      profitRates: [
        -11.0, 1.1235955056179776, -15.555555555555555, 18.421052631578945,
      ],
    },
    {
      labels: [9, 10, 11, 12],
      profitRates: [0.0, 0.0, 0.0, 0.0],
    },
  ];
  const chartRef = useRef(null);
  let chartInstance = null;

  const color = ["#165BAA", "rgba(255, 99, 132, 1)", "#A155B9"];

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      Chart.register(
        LineController,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: data[0].labels,
          datasets: [
            {
              label: "종합 계좌",
              data: data[0].profitRates,
              borderColor: "#165BAA",
              pointRadius: 5, // 포인트 크기
              pointBackgroundColor: "#165BAA", // 포인트 배경색
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 7, // 호버 시 포인트 크기
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
            },
            {
              label: "CMA 계좌",
              data: imsiData[1].profitRates,
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 5, // 포인트 크기
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 7, // 호버 시 포인트 크기
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
            },
            {
              label: "종합 계좌",
              data: [25, 10, 18, 20, -19, 0],
              borderColor: "#A155B9",
              pointRadius: 5, // 포인트 크기
              pointBackgroundColor: "#A155B9", // 포인트 배경색
              pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
              pointHoverRadius: 7, // 호버 시 포인트 크기
              fill: false, // 라인 그래프에서 영역 채우기 비활성화
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: true,
            },
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };

    const initializeChart = () => {
      destroyChart(); // 이전 차트 파괴
      createChart(); // 새로운 차트 생성
    };

    // 컴포넌트가 처음 렌더링될 때 차트 초기화
    initializeChart();

    // 컴포넌트가 unmount될 때 차트 파괴
    return () => {
      destroyChart();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
