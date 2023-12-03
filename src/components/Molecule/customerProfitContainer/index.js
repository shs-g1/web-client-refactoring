import { Container, Bold, Text, TextContainer, Black } from "./styled";

const CustomerProfitContainer = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <TextContainer>
        <Bold>누적 수익률</Bold>
        <Text isNegative={data.currentProfitRate < 0}>
          {data.currentProfitRate}%
        </Text>
      </TextContainer>
      <TextContainer>
        <Bold>손익 금액</Bold>
        <Text isNegative={data.currentProfitRate < 0}>{data.profits}원</Text>
      </TextContainer>
      <TextContainer>
        <Bold>자산 금액</Bold>
        <Black>{data.totalAssets}원</Black>
      </TextContainer>
    </Container>
  );
};
export default CustomerProfitContainer;
