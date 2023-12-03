// components/Atom/specialization-input/index.js

import React, { useState } from "react";
import styled from "styled-components";
import { SaveButton } from "../image-input/styled";

export const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Required = styled.span`
  color: #c13c3c;
  font-size: 18px;
  margin-right: 3px;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-right: 30px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 18px;
  color: #d9d9d9;
  margin-left: 5px;
`;

export const HashTag = styled.button`
  cursor: pointer;
  border-radius: 30px;
  background: ${({ isSelected }) => (isSelected ? "#384a7d" : "#fafafa")};
  color: ${({ isSelected }) => (isSelected ? "#fafafa" : "#384a7d")};
  text-align: center;
  width: 120px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  padding: 0 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:active {
    transform: scale(0.95);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0px 30px 0px;
`;

const AtomSpecializationInput = ({ onUpdate, attribute, required }) => {
  const [selectedHashtags, setSelectedHashtags] = useState([]);

  const [buttonStates, setButtonStates] = useState({
    금융상품: false,
    국내주식: false,
    해외주식: false,
    은퇴관리: false,
  });

  const handleToggle = (button) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [button]: !prevStates[button],
    }));
  };

  const toggleHashtag = (hashtag) => {
    if (selectedHashtags.includes(hashtag)) {
      setSelectedHashtags(selectedHashtags.filter((tag) => tag !== hashtag));
    } else {
      setSelectedHashtags([...selectedHashtags, hashtag]);
    }

    // Toggle the button state
    handleToggle(hashtag);
  };

  const handleSaveCareer = () => {
    onUpdate(attribute, selectedHashtags);
  };

  return (
    <div>
      <Text>
        {required && <Required>*</Required>}전문 분야
        <Span> (최대 3개까지 입력해주세요)</Span>
      </Text>
      <ButtonContainer>
        {Object.keys(buttonStates).map((button) => (
          <HashTag
            key={button}
            isSelected={buttonStates[button]}
            onClick={() => toggleHashtag(button)}
          >
            {button}
          </HashTag>
        ))}
        <SaveButton onClick={handleSaveCareer}>임시 저장</SaveButton>
      </ButtonContainer>
    </div>
  );
};

export default AtomSpecializationInput;
