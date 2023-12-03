// components/Atom/pb-portfolio-table-modal/index.js

import React from "react";
import { Container, Table, Thead, Tr, Th, Tbody, Td, Button } from "./styled";
const AtomPBPortfolioTableModal = ({ portfolioData }) => {
  const tableData = {
    labels: portfolioData.labels,
    productNames: portfolioData.productNames,
    accumRoRs: portfolioData.accumRoRs,
    durations: portfolioData.durations,
    ratios: portfolioData.ratios,
  };

  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>자산 유형</Th>
            <Th>상품 명</Th>
            <Th>누적 수익률</Th>
            <Th>운용 기간</Th>
            <Th>투자 비율</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.labels.map((label, index) => (
            <Tr key={index}>
              <Td>{label}</Td>
              <Td>{tableData.productNames[index]}</Td>
              <Td>{tableData.accumRoRs[index].toFixed(2)}%</Td>
              <Td>{tableData.durations[index]}</Td>
              <Td>{tableData.ratios[index].toFixed(2)}%</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default AtomPBPortfolioTableModal;
