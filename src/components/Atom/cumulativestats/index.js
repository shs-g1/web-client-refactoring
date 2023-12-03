// components/Atom/cumulativestats/index.js
import React from "react";
import { Container, SmallContainer, Text, Blue } from "./styled";
const AtomCumulativeStats = ({ cumulativeStats }) => {

  const { customers, totalAmount, profitMargin } = cumulativeStats;

  return (
    <Container>
      <SmallContainer>
        <Text>누적 고객</Text>
        <Blue> {customers}명</Blue>
      </SmallContainer>
      <SmallContainer>
        <Text>누적 금액</Text>
        <Blue> {totalAmount.toLocaleString()}원</Blue>
      </SmallContainer>
      <SmallContainer>
        <Text>누적 수익률</Text>
        <Blue> {profitMargin}%</Blue>
      </SmallContainer>
    </Container>
  );
};

export default AtomCumulativeStats;
