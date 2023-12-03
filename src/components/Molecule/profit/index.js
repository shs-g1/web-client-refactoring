import { LineChart, SubTitle } from "../../index";
import { Reduce, Container } from "../portfolio/styled";
const Profit = ({ data }) => {
  return (
    <Container>
      <SubTitle subTitle="수익률"></SubTitle>
      <Reduce>
        <LineChart data={data}></LineChart>
      </Reduce>
    </Container>
  );
};
export default Profit;
