/*Todo*/
import styled from "styled-components";

export const Container = styled.div`
  width: 15vw;
  height: 40vh;
  flex-shrink: 0;
  border-radius: 20px;
  background: #eaeff6;
  padding: 30px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ListHeader = styled.div`
  color: #384a7d;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 15px;
`;

export const Item = styled.div`
  padding: 5px;
`;

export const Text = styled.div`
  font-size: 16px;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background: #384a7d;
  color: #ffffff;
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: 15px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background-color: #a3c7f7;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  font-family: "ONE SHINHAN MEDUIM";
`;

export const TimeContainer = styled.div`
  font-size: 16px;
  line-height: 21px;
  display: flex;
`;
export const Time = styled.li`
  color: #384a7d;
  font-weight: 500;
  margin-right: 5px;
`;
