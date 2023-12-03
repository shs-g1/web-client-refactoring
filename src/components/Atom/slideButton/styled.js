/*SlideButton*/
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.1s;

  color: #c9c9c9;
  text-align: center;
  border-radius: 10px;

  &:hover {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #eaeff6;
    color: #384a7d;
  }

  ${(props) =>
    props.isSelected &&
    `
    padding: 10px 20px;
    cursor: pointer;
    text-align: center;
    color:#384a7d;
    background-color: #eaeff6;
  `}
`;
