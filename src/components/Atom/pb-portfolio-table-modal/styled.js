import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: Poppins;
  font-size: 26px;
  font-weight: 600;
  margin: 10px 0px 20px 0px;
`;

export const Table = styled.table``;

export const Thead = styled.thead`
  font-weight: 700;
  max-width: 800px;
  border-radius: 6px;
  text-align: center;
`;

export const Tr = styled.tr`
  max-width: 300px;
`;

export const Td = styled.td`
  padding: 15px 5px;
  text-align: center;
  color: #464e5f;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  max-width: 300px;
  word-break: keep-all;
`;

export const Th = styled.th`
  padding: 10px 15px;
  text-align: center;
  background-color: #fafafa;
  color: #b5b5c3;
  font-size: 13px;
  font-weight: 600;
  max-width: 300px;
  word-break: keep-all;
`;

export const Tbody = styled.tbody``;
