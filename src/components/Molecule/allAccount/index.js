import { Container } from "./styled.js";
import { SubTitle, Table } from "../../index";
import React, { forwardRef } from "react";

const AllAccount = forwardRef((data, ref) => {
  console.log(data);
  const tableHeader = ["계좌번호", "총자산", "출금가능금액"];

  const tables = data.data;

  return (
    <Container ref={ref}>
      <SubTitle subTitle="전체 계좌"></SubTitle>
      <Table nodes={tables} header={tableHeader}></Table>
    </Container>
  );
});

export default AllAccount;
