// components/Atom/pb-portfolio-table/index.js
// 고객에게 보여지는 페이지에서 바로 노출되는 포트폴리오 3개의 리스트

import React from "react";
import { Container, Title, Table, Thead, Tbody, Tr, Th, Td } from "./styled";

const getRandomNumber = () => {
  // Math.random()은 0 이상 1 미만의 난수를 생성
  // 여기에 30을 곱하면 0 이상 30 미만의 난수를 얻을 수 있음
  // 15를 뺌으로써 -15 이상 15 미만의 범위를 얻음
  return (Math.random() * 30 - 15).toFixed(2);
};

// Td 컴포넌트에서 사용할 랜덤한 숫자
const randomValues = [getRandomNumber(), getRandomNumber(), getRandomNumber()];


const AtomPBPortfolioTable = ({ title, content, onRowClick }) => {
  const tableData = {
    portfolioNames: content.portfolioNames, // 이름
    principals: content.principals, // 투자원금
    returns: content.returns, // 투자수익률
    cumulativeRORs: content.cumulativeRORs, // 누적수익률
    durations: content.durations, // 기간
  };

  // 누적 수익률 소수점 2자리 까지 보이게 수정
  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        <Thead>
          <Tr>
            <Th>이름</Th>
            <Th>투자 원금</Th>
            <Th>투자 수익</Th>
          </Tr>
          <Tr>
            <Th>누적 수익률</Th>
            <Th>기간</Th>
            <Th>MDD</Th>
          </Tr>
        </Thead>
        {tableData.portfolioNames.map((portfolioName, index) => (
          <Tbody key={index}>
            <Tr onClick={() => onRowClick(tableData, index)}>
              <Td>{portfolioName}</Td>
              <Td>{tableData.principals[index].toLocaleString()}원</Td>
              <Td>{tableData.returns[index].toLocaleString()}원</Td>
            </Tr>
            <Tr>
              <Td>{tableData.cumulativeRORs[index].toFixed(2)}%</Td>
              <Td>{tableData.durations[index]}</Td>
              <Td>{randomValues[index]}%</Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </Container>
  );
};

export default AtomPBPortfolioTable;
