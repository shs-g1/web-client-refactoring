import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width || "100%"};
  background-color: #384a7d;
  display: flex;
  justify-content: flex-start;
  padding: 10px 10px;
  align-items: center;
`;

export const Image = styled.img`
  width: 60px;
`;

export const Text = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  font-family: Poppins;
`;
