//components/Atom/image-input/styled.js

import styled from "styled-components";

export const ImageContainer = styled.div`
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  margin-left: 5px;
`;

export const Required = styled.span`
  color: #c13c3c;
  font-size: 18px;
  margin-right: 3px;
`;

export const Span = styled.span`
  font-size: 18px;
`;

export const Input = styled.input`
  width: ${(props) => props.width || "270px"};
  height: 38px;
  border-radius: 4px;
  border: 1px solid #c9c9c9;
  margin: 0 10px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    color: #c9c9c9;
  }
`;

export const FlexEmail = styled.div`
  display: flex;
  align-items: center;
`;

export const SaveButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  margin-left: 20px;
  &:active {
    transform: scale(0.95);
  }
`;

export const Select = styled.select`
  width: 270px;
  height: 38px;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid var(--Grey, #c9c9c9);
`;

export const Option = styled.option``;

export const Div = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const FileButton = styled.button`
  cursor: pointer;
  background-color: #eaeff6;
  color: #000;
  padding: 8px;
  border-radius: 4px;
  margin-left: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

export const Label = styled.label`
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;
