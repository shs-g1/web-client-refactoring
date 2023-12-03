// components/Molecule/pb-portfolio-modal/index.js

import React, { useState, useEffect } from "react";
import AtomPBPortfolioDoughnutChartModal from "../../Atom/pb-portfolio-chart-modal";
import AtomPBPortfolioTableModal from "../../Atom/pb-portfolio-table-modal";
import Modal from "react-modal";
import styled from "styled-components";

export const Button = styled.button`
  font-size: 15px;
  border: none;
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const MoleculePBPortfolioModal = ({ rowData, onClose }) => {
  // rowData => index
  const title = "구성"; // 포트폴리오 구성
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [portfolioData, setPortfolioData] = useState({
    labels: ["국내주식", "국내채권(장내)", "해외주식", "국내주식"],
    productNames: ["삼성전자", "농금채(중앙회)2023-11이2Y-C", "BABA", "캡스톤파트너스"],
    accumRoRs: [106.2, 35.8, 230.6, 84.5],
    durations: ["10년 2개월", "5년 2개월", "10년 2개월", "8년 3개월"],
    ratios: [42, 22, 8, 28], // default value
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://133.186.218.115/api/v1/portfoliodetail?portfolioId=" + (rowData + 1)) // TODO: api 호출, rowData(index)를 바탕으로 호출
      .then((response) => response.json())
      .then((result) => {
        setPortfolioData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [rowData]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  // console.log('debug');
  // console.log(portfolioData);  // portfolioData 잘 들어온다.
  // console.log('선택된 row는' + rowData);  // 여기까지 잘 들어옴

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      contentLabel="포트폴리오 상세"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          width: "100%",
          maxWidth: "300px",
          height: "650px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <AtomPBPortfolioDoughnutChartModal
        title={title}
        portfolioData={portfolioData}
      />
      <AtomPBPortfolioTableModal portfolioData={portfolioData} />
      <Footer>
        <Button></Button>
        <Button onClick={onClose}>닫기</Button>
      </Footer>
    </Modal>
  );
};

export default MoleculePBPortfolioModal;
