import { SubTitle, BarChart } from "../../index";
import { Container, Reduce } from "./styled";
import React, { forwardRef } from "react";

const Portfolio = forwardRef((data, ref) => {
  return (
    <Container ref={ref}>
      <SubTitle subTitle="포트폴리오"></SubTitle>
      <Reduce>
        <BarChart data={data}></BarChart>
      </Reduce>
    </Container>
  );
});

export default Portfolio;
