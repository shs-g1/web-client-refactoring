// components/Atom/portfolio-chart-modal/index.js

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Container, Title, Header } from "./styled";
ChartJS.register(ArcElement, Tooltip, Legend);



const AtomPBPortfolioDoughnutChartModal = ({ title, portfolioData }) => {

  const data = {
    labels: portfolioData.labels,
    datasets: [
      {
        data: portfolioData.ratios,
        backgroundColor: ["#384A7D", "#E1E1E0", "#D8B3FF", "#63ABFD"],  // 색 수정
      },
    ],
  };

  const options = {
    cutoutPercentage: 60,
    legend: {
      position: "right",
    },
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Doughnut data={data} options={options} />
    </Container>
  );
};

export default AtomPBPortfolioDoughnutChartModal;
