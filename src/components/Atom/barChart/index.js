import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import "chartjs-plugin-datalabels";

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  console.log(data.data, "data");

  const labels = data.data.map((item) => item.sector);
  const datasets = [data.data.map((item) => item.percent)];

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = () => {
      Chart.register(...registerables);
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "자산 비율",
              data: datasets[0],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
          plugins: {
            datalabels: {
              display: true,
              anchor: "end",
              align: "end",
              color: "black",
              formatter: (value) => {
                return value + "%";
              },
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

    destroyChart(); // 기존 차트 파괴
    createChart(); // 새로운 차트 생성

    return () => {
      destroyChart(); // 컴포넌트가 unmount될 때 차트 파괴
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
