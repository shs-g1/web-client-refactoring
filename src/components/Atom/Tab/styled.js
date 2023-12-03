/*Tab */
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px 17px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.1s;
  background-color: #384a7d;
  color: white;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    background-color: #ffffff;
    color: #384a7d;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  ${(props) =>
    props.isSelected &&
    `
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    padding: 20px 20px 10px 20px;
    color:#384a7d;
    background-color: #ffffff;
  `}
`;
