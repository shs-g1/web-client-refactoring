import styled from "styled-components";

export const Container = styled.div`
  width: 44%;
  height: 160px;
  padding: 10px 15px 10px 40px;
  border-radius: 20px;
  background: #eaeff6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  align-items: center;
`;

export const CustomerImage = styled.img`
  width: 140px;
  height: 140px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  width: 60%;
  justify-content: flex-start;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
`;

export const Name = styled.div`
  width: 100px;
  color: #384a7d;
  font-size: 32px;
  font-weight: 700;
`;

export const NameContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
