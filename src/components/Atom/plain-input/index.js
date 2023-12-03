// components/Atom/plain-input/index.js

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 45px;
`;

const Required = styled.span`
  color: #c13c3c;
  font-size: 18px;
  margin-right: 3px;
`;

const Input = styled.input`
  width: ${(props) => props.width || "270px"};
  height: 38px;
  border-radius: 4px;
  border: 1px solid var(--Grey, #c9c9c9);
  margin-right: 50px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    color: #c9c9c9;
  }
`;

const AtomPlainInput = ({
  title,
  placeholder,
  onUpdate,
  attribute,
  required,
  width,
}) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
    onUpdate(attribute, newValue);
  };

  return (
    <Container>
      {/* 입력값을 표시하는 부분 */}
      <Text>
        {required && <Required>*</Required>}
        {title}
      </Text>

      {/* 실제 입력창 */}
      <Input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder={placeholder}
        width={width}
      />
    </Container>
  );
};

export default AtomPlainInput;
