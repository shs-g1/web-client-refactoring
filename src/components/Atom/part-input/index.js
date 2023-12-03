// component/Atom/part-input/index.js

import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width || "270px"};
  height: 38px;
  border-radius: 4px;
  border: 1px solid var(--Grey, #c9c9c9);
  margin: 0 10px;
  font-size: 16px;
  padding: 0 10px;
  &::placeholder {
    color: #c9c9c9;
  }
`;

const AtomPartInput = ({ placeholder, value, onChange, width }) => {
  const [inputText, setInputText] = useState(value || ""); // Set initial value if provided

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
    onChange(newValue);
  };

  return (
    <>
      <Input
        type="text"
        value={inputText}
        width={width}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default AtomPartInput;
