import styled from "styled-components";

export const Container = styled.div`
  width: 44%;
  height: 160px;
  padding: 10px 27.5px;
  border-radius: 20px;
  background: #f3f3f4;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Bold = styled.div`
  color: #384a7d;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Text = styled.div`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: ${(props) => (props.isNegative ? "#175AE9" : "#C13C3C")};
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Black = styled.div`
  color: #000000;
`;
