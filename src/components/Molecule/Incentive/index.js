import {
  Container,
  Title,
  IncentiveItem,
  IncentiveBlue,
  IncentiveContainer,
} from "./styled";

const Incentive = ({ title, incentiveTitle, incentive }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <IncentiveContainer>
        <IncentiveItem>{incentiveTitle}</IncentiveItem>
        <IncentiveBlue>{incentive}원</IncentiveBlue>
      </IncentiveContainer>
      <IncentiveItem>입니다.</IncentiveItem>
    </Container>
  );
};
export default Incentive;
