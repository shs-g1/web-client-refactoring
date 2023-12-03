import { Container, MiniTitle, Margin } from "./styled";
import { SubTitle, Table } from "../../index";
import React, { forwardRef } from "react";
const Balance = forwardRef((data, ref) => {
  const tableHeader = ["종목코드", "종목명", "투자수량", "평가금액"];
  console.log(data.data[0].transactionDtoList, "whdahr");
  const jusikData = data.data[0].transactionDtoList;
  const chaegwonData = data.data[1].transactionDtoList;
  const pasaengData = data.data[2].transactionDtoList;
  // const chaegwonData = [
  //   {
  //     code: "R6003492DB8",
  //     name: "대한항공 105-2",
  //     amount: "50",
  //     price: "1000000",
  //   },
  //   {
  //     code: "R6003492DB8",
  //     name: "대한항공 105-2",
  //     amount: "50",
  //     price: "1000000",
  //   },
  // ];
  // const pasaengData = [
  //   {
  //     code: "R6003492DB8",
  //     name: "삼성인덱스프리미엄30증권투자회사",
  //     amount: "50",
  //     price: "1000000",
  //   },
  // ];

  return (
    <Container ref={ref}>
      <SubTitle subTitle="잔고/체결내역"></SubTitle>
      <MiniTitle>주식</MiniTitle>
      <Table nodes={jusikData} header={tableHeader}></Table>
      <Margin></Margin>
      <MiniTitle>채권</MiniTitle>
      <Table nodes={chaegwonData} header={tableHeader}></Table>

      <Margin></Margin>
      <MiniTitle>파생</MiniTitle>
      <Table nodes={pasaengData} header={tableHeader}></Table>
    </Container>
  );
});
export default Balance;
